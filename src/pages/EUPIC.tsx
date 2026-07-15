import { useEffect } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Building2, FileText, Globe, User } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';

const EUPIC = () => {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = t('legalInformation') + ' | InsightMatches';
  }, [t]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      <main className="container mx-auto px-4 py-12 pt-24 flex-grow">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-foreground">
              {t('legalInformation')}
            </h1>
            <p className="text-lg text-muted-foreground">
              {t('legalInformationSubtitle')}
            </p>
          </div>

          {/* Representative Information */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <User className="w-5 h-5 text-primary" />
                <CardTitle>{t('companyRepresentative')}</CardTitle>
              </div>
              <CardDescription>{t('companyRepresentativeDesc')}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-lg font-semibold text-foreground">Paul Thomas CONVERSY</p>
              <p className="text-muted-foreground">CEO & Founder</p>
            </CardContent>
          </Card>

          {/* Registration Information Cards */}
          <div className="grid gap-6 md:grid-cols-2">
            {/* South Korea Registration */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-primary" />
                  <CardTitle>{t('southKoreaRegistration')}</CardTitle>
                </div>
                <CardDescription>{t('southKoreaRegistrationDesc')}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">{t('businessRegistrationNumber')}</p>
                  <p className="text-sm text-muted-foreground">(사업자등록번호)</p>
                  <p className="text-lg font-mono font-semibold text-foreground mt-1">793-88-03747</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">{t('corporateRegistrationNumber')}</p>
                  <p className="text-sm text-muted-foreground">(법인등록번호)</p>
                  <p className="text-lg font-mono font-semibold text-foreground mt-1">180111-0160542</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">{t('southKoreaPIC')}</p>
                  <p className="text-lg font-mono font-semibold text-foreground mt-1">870627090</p>
                </div>
              </CardContent>
            </Card>

            {/* France Registration */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Globe className="w-5 h-5 text-primary" />
                  <CardTitle>{t('franceRegistration')}</CardTitle>
                </div>
                <CardDescription>{t('franceRegistrationDesc')}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">{t('francePIC')}</p>
                  <p className="text-lg font-mono font-semibold text-foreground mt-1">877195833</p>
                </div>
              </CardContent>
            </Card>

            {/* OID */}
            <Card className="md:col-span-2">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-primary" />
                  <CardTitle>{t('organizationIdentifier')}</CardTitle>
                </div>
                <CardDescription>{t('organizationIdentifierDesc')}</CardDescription>
              </CardHeader>
              <CardContent>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">OID</p>
                  <p className="text-lg font-mono font-semibold text-foreground mt-1">E10374518</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Additional Information */}
          <Card>
            <CardHeader>
              <CardTitle>{t('aboutEUPIC')}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>{t('aboutEUPICText1')}</p>
              <p>{t('aboutEUPICText2')}</p>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default EUPIC;
