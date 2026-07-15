import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { toast } from "sonner";

type DemoRequest = {
  id: string;
  created_at: string;
  name: string;
  email: string;
  organization: string;
  website: string | null;
  rd_focus_area: string;
};

type NextriseSignup = {
  id: string;
  created_at: string;
  full_name: string;
  email: string;
  company_name: string;
  website: string | null;
  role: string;
  country: string;
  linkedin_url: string | null;
  phone: string | null;
  research_areas: string[];
  other_area: string | null;
  grant_status: string;
  has_project_idea: string | null;
  project_idea: string | null;
};

type ReferralSignup = {
  id: string;
  created_at: string;
  full_name: string;
  work_email: string;
  linkedin_url: string | null;
};

function downloadCSV(filename: string, rows: Record<string, unknown>[]) {
  if (!rows.length) return;
  const headers = Object.keys(rows[0]);
  const esc = (v: unknown) => {
    const s = v == null ? "" : Array.isArray(v) ? v.join("; ") : String(v);
    return `"${s.replace(/"/g, '""')}"`;
  };
  const csv = [
    headers.join(","),
    ...rows.map((r) => headers.map((h) => esc(r[h])).join(",")),
  ].join("\n");
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

export default function Admin() {
  const navigate = useNavigate();
  const [checking, setChecking] = useState(true);
  const [email, setEmail] = useState<string | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [demos, setDemos] = useState<DemoRequest[]>([]);
  const [signups, setSignups] = useState<NextriseSignup[]>([]);
  const [referrals, setReferrals] = useState<ReferralSignup[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const init = async () => {
      const { data: sess } = await supabase.auth.getSession();
      if (!sess.session) {
        navigate("/admin/login", { replace: true });
        return;
      }
      const userId = sess.session.user.id;
      setEmail(sess.session.user.email ?? null);

      const { data: roles } = await supabase
        .from("user_roles")
        .select("role")
        .eq("user_id", userId);

      const admin = !!roles?.some((r) => r.role === "admin");
      setIsAdmin(admin);
      setChecking(false);

      if (admin) {
        await loadData();
      }
    };
    init();
  }, [navigate]);

  const loadData = async () => {
    setLoading(true);
    const [demoRes, signupRes, refRes] = await Promise.all([
      supabase.from("demo_requests").select("*").order("created_at", { ascending: false }),
      supabase.from("nextrise_signups").select("*").order("created_at", { ascending: false }),
      supabase.from("referral_signups").select("*").order("created_at", { ascending: false }),
    ]);
    if (demoRes.error) toast.error("Failed to load demo requests");
    else setDemos(demoRes.data as DemoRequest[]);
    if (signupRes.error) toast.error("Failed to load NextRise signups");
    else setSignups(signupRes.data as NextriseSignup[]);
    if (refRes.error) toast.error("Failed to load referral signups");
    else setReferrals(refRes.data as ReferralSignup[]);
    setLoading(false);
  };

  const signOut = async () => {
    await supabase.auth.signOut();
    navigate("/admin/login", { replace: true });
  };

  if (checking) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">Loading…</p>
      </main>
    );
  }

  if (!isAdmin) {
    return (
      <main className="min-h-screen flex items-center justify-center px-6">
        <section className="max-w-md text-center space-y-4">
          <h1 className="text-2xl font-semibold">Access denied</h1>
          <p className="text-muted-foreground">
            Your account ({email}) does not have admin access. Contact the site
            owner to be granted the admin role.
          </p>
          <Button variant="outline" onClick={signOut}>
            Sign out
          </Button>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background p-6 md:p-10">
      <div className="max-w-7xl mx-auto space-y-6">
        <header className="flex items-center justify-between flex-wrap gap-3">
          <div>
            <h1 className="text-2xl font-semibold">Admin · Form submissions</h1>
            <p className="text-sm text-muted-foreground">Signed in as {email}</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" onClick={loadData} disabled={loading}>
              {loading ? "Refreshing…" : "Refresh"}
            </Button>
            <Button variant="outline" onClick={signOut}>
              Sign out
            </Button>
          </div>
        </header>

        <Tabs defaultValue="nextrise" className="w-full">
          <TabsList>
            <TabsTrigger value="nextrise">
              NextRise signups ({signups.length})
            </TabsTrigger>
            <TabsTrigger value="demo">
              Demo requests ({demos.length})
            </TabsTrigger>
            <TabsTrigger value="referrals">
              Referrals ({referrals.length})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="nextrise" className="space-y-3">
            <div className="flex justify-end">
              <Button
                size="sm"
                variant="secondary"
                onClick={() => downloadCSV("nextrise_signups.csv", signups)}
                disabled={!signups.length}
              >
                Export CSV
              </Button>
            </div>
            <div className="border rounded-lg overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Company</TableHead>
                    <TableHead>Research areas</TableHead>
                    <TableHead>Project idea</TableHead>
                    <TableHead>Grant status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {signups.map((s) => (
                    <TableRow key={s.id}>
                      <TableCell className="whitespace-nowrap">
                        {new Date(s.created_at).toLocaleString()}
                      </TableCell>
                      <TableCell>{s.full_name}</TableCell>
                      <TableCell>{s.email}</TableCell>
                      <TableCell>{s.company_name}</TableCell>
                      <TableCell className="max-w-xs">
                        {s.research_areas?.join(", ")}
                      </TableCell>
                      <TableCell className="max-w-xs whitespace-pre-wrap">
                        {s.has_project_idea === "Yes, I have a project idea" && s.project_idea
                          ? s.project_idea
                          : s.has_project_idea || "—"}
                      </TableCell>
                      <TableCell>{s.grant_status}</TableCell>
                    </TableRow>
                  ))}
                  {!signups.length && (
                    <TableRow>
                      <TableCell colSpan={7} className="text-center text-muted-foreground py-8">
                        No signups yet.
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
          </TabsContent>

          <TabsContent value="demo" className="space-y-3">
            <div className="flex justify-end">
              <Button
                size="sm"
                variant="secondary"
                onClick={() => downloadCSV("demo_requests.csv", demos)}
                disabled={!demos.length}
              >
                Export CSV
              </Button>
            </div>
            <div className="border rounded-lg overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Organization</TableHead>
                    <TableHead>Website</TableHead>
                    <TableHead>R&D focus area</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {demos.map((d) => (
                    <TableRow key={d.id}>
                      <TableCell className="whitespace-nowrap">
                        {new Date(d.created_at).toLocaleString()}
                      </TableCell>
                      <TableCell>{d.name}</TableCell>
                      <TableCell>{d.email}</TableCell>
                      <TableCell>{d.organization}</TableCell>
                      <TableCell>{d.website || "—"}</TableCell>
                      <TableCell className="max-w-md whitespace-pre-wrap">
                        {d.rd_focus_area}
                      </TableCell>
                    </TableRow>
                  ))}
                  {!demos.length && (
                    <TableRow>
                      <TableCell colSpan={6} className="text-center text-muted-foreground py-8">
                        No demo requests yet.
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
          </TabsContent>

          <TabsContent value="referrals" className="space-y-3">
            <div className="flex justify-end">
              <Button
                size="sm"
                variant="secondary"
                onClick={() => downloadCSV("referral_signups.csv", referrals)}
                disabled={!referrals.length}
              >
                Export CSV
              </Button>
            </div>
            <div className="border rounded-lg overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Work email</TableHead>
                    <TableHead>LinkedIn</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {referrals.map((r) => (
                    <TableRow key={r.id}>
                      <TableCell className="whitespace-nowrap">
                        {new Date(r.created_at).toLocaleString()}
                      </TableCell>
                      <TableCell>{r.full_name}</TableCell>
                      <TableCell>{r.work_email}</TableCell>
                      <TableCell className="max-w-xs truncate">
                        {r.linkedin_url ? (
                          <a href={r.linkedin_url} target="_blank" rel="noreferrer" className="underline">
                            {r.linkedin_url}
                          </a>
                        ) : "—"}
                      </TableCell>
                    </TableRow>
                  ))}
                  {!referrals.length && (
                    <TableRow>
                      <TableCell colSpan={4} className="text-center text-muted-foreground py-8">
                        No referral signups yet.
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
}
