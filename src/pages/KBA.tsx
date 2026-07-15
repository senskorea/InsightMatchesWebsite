import { Logo } from "@/components/Logo";

const KBA = () => {
  return (
    <div className="min-h-screen bg-background py-10 px-5">
      <div className="container max-w-7xl mx-auto">
        {/* Header */}
        <header className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Logo />
          </div>
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-3 tracking-tight">
            KBA Trend Platform Proposal Comparison
          </h1>
          <p className="font-inter text-lg text-muted-foreground font-medium">
            Comparing Full-Featured (Proposal 2) vs. Basic MVP (Proposal 1)
          </p>
        </header>

        {/* Intro Text */}
        <div className="mb-8 p-6 bg-secondary/50 rounded-2xl border-l-4 border-primary">
          <p className="font-inter text-lg text-foreground font-medium">
            The best way to think about the difference is that{" "}
            <strong>Proposal 1 is the basic, affordable starter version (the MVP)</strong>, and{" "}
            <strong>Proposal 2 is the full-featured, powerful, premium version.</strong>
          </p>
        </div>

        {/* Comparison Table Section */}
        <section className="bg-card rounded-3xl border border-border shadow-lg overflow-hidden">
          <h2 className="font-playfair text-3xl font-bold text-foreground px-10 pt-10 pb-4 border-b-4 border-primary">
            Key Differences Explained
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-secondary/50">
                  <th className="font-inter p-5 text-left font-bold text-foreground border-b border-r border-border">
                    Feature
                  </th>
                  <th className="font-inter p-5 text-left font-bold text-foreground border-b border-r border-border">
                    Proposal 2 (Full Scope)
                  </th>
                  <th className="font-inter p-5 text-left font-bold text-foreground border-b border-r border-border">
                    Proposal 1 (Basic Scope)
                  </th>
                  <th className="font-inter p-5 text-left font-bold text-foreground border-b border-border">
                    In Layman's Terms
                  </th>
                </tr>
              </thead>
              <tbody className="font-inter text-sm">
                {/* Cost and Scope */}
                <tr>
                  <td className="p-5 border-b border-r border-border bg-card">
                    <strong className="text-foreground">Total Cost & Size</strong>
                  </td>
                  <td className="p-5 border-b border-r border-border bg-card text-muted-foreground">
                    <strong className="text-foreground">₩10,000,000 KRW</strong>
                  </td>
                  <td className="p-5 border-b border-r border-border bg-secondary/20 text-muted-foreground">
                    <strong className="text-foreground">~₩5,900,000 KRW</strong> (Total of all phases)
                  </td>
                  <td className="p-5 border-b border-border bg-card text-muted-foreground">
                    <strong className="text-foreground">Proposal 2 costs significantly more</strong> because you are paying for the advanced features.{" "}
                    <strong className="text-foreground">Proposal 1 is about 40% cheaper</strong> because it sticks to the absolute necessary, basic features.
                  </td>
                </tr>

                {/* AI Intelligence */}
                <tr>
                  <td className="p-5 border-b border-r border-border bg-card">
                    <strong className="text-foreground">AI Intelligence (The Brains)</strong>
                  </td>
                  <td className="p-5 border-b border-r border-border bg-card text-muted-foreground">
                    Uses <strong className="text-foreground">GPT + Hugging Face Transformers.</strong> Provides{" "}
                    <strong className="text-foreground">advanced AI-driven content analysis</strong> and{" "}
                    <strong className="text-foreground">personalized recommendations.</strong>
                  </td>
                  <td className="p-5 border-b border-r border-border bg-secondary/20 text-muted-foreground">
                    Uses <strong className="text-foreground">GPT Agent</strong> only. Provides{" "}
                    <strong className="text-foreground">basic AI-driven recommendations</strong> (e.g., caption suggestions).
                  </td>
                  <td className="p-5 border-b border-border bg-card text-muted-foreground">
                    <strong className="text-foreground">Proposal 2 is much smarter.</strong> It uses a second, dedicated AI (Hugging Face) to{" "}
                    <strong className="text-foreground">analyze videos and spot emerging trends.</strong> Proposal 1 is just a basic "smart assistant" that can give simple text suggestions, but lacks deep trend insight.
                  </td>
                </tr>

                {/* Admin Tools and User Control */}
                <tr>
                  <td className="p-5 border-b border-r border-border bg-card">
                    <strong className="text-foreground">Admin & User Control</strong>
                  </td>
                  <td className="p-5 border-b border-r border-border bg-card text-muted-foreground">
                    Includes <strong className="text-foreground">full CRUD management (Create, Read, Update, Delete)</strong> of all user and AI content. Advanced endpoint to retrieve{" "}
                    <strong className="text-foreground">trending Reels sorted by engagement.</strong>
                  </td>
                  <td className="p-5 border-b border-r border-border bg-secondary/20 text-muted-foreground">
                    Provides a <strong className="text-foreground">simple filtering and content overview</strong> for users. Advanced trend sorting is not explicitly included.
                  </td>
                  <td className="p-5 border-b border-border bg-card text-muted-foreground">
                    <strong className="text-foreground">Proposal 2 gives the admin complete control</strong> (Create, Read, Update, Delete) over every piece of content and provides strong analytics.{" "}
                    <strong className="text-foreground">Proposal 1's dashboard is simpler,</strong> with fewer tools for deep moderation or trend analysis.
                  </td>
                </tr>

                {/* Community Chat */}
                <tr>
                  <td className="p-5 border-b border-r border-border bg-card">
                    <strong className="text-foreground">Community Chat</strong>
                  </td>
                  <td className="p-5 border-b border-r border-border bg-card text-muted-foreground">
                    Guarantees a <strong className="text-foreground">topic-based global chat</strong> with{" "}
                    <strong className="text-foreground">moderation tools</strong> (delete, report).
                  </td>
                  <td className="p-5 border-b border-r border-border bg-secondary/20 text-muted-foreground">
                    Offers a <strong className="text-foreground">global chat, topic-based if feasible</strong> (cheaper phase cost).
                  </td>
                  <td className="p-5 border-b border-border bg-card text-muted-foreground">
                    <strong className="text-foreground">Proposal 2 has a proper forum structure.</strong> You get different "chat rooms" for different subjects and the tools to keep the chat clean.{" "}
                    <strong className="text-foreground">Proposal 1 has a simpler chat,</strong> which might be just one big room with basic or absent moderation tools.
                  </td>
                </tr>

                {/* Final Product and Handover */}
                <tr>
                  <td className="p-5 border-r border-border bg-card">
                    <strong className="text-foreground">Final Handover</strong>
                  </td>
                  <td className="p-5 border-r border-border bg-card text-muted-foreground">
                    Includes a <strong className="text-foreground">GitHub repository with source code and deployment instructions</strong> +{" "}
                    <strong className="text-foreground">a 1-hour online handover/training session.</strong> Full estimate of{" "}
                    <strong className="text-foreground">monthly external costs.</strong>
                  </td>
                  <td className="p-5 border-r border-border bg-secondary/20 text-muted-foreground">
                    Includes <strong className="text-foreground">minimal documentation</strong> and admin credentials. No external cost estimate provided.
                  </td>
                  <td className="p-5 bg-card text-muted-foreground">
                    <strong className="text-foreground">Proposal 2 hands you the keys and teaches you how to drive.</strong> You get all the detailed instructions, personal training, and a budget for future costs.{" "}
                    <strong className="text-foreground">Proposal 1 just hands you the basic materials</strong> with less guidance and no full cost overview.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
};

export default KBA;
