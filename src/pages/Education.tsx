import React from 'react';
import { Navbar } from '../components/Navbar';
import { useTranslation } from '../hooks/useTranslation';
import { BookOpen, Users, Lightbulb, Code, Brain, Shield, GraduationCap, Building, Heart } from 'lucide-react';

const Education = () => {
  const { t } = useTranslation();
  
  const approaches = [
    {
      icon: <BookOpen className="w-8 h-8 text-mint-500" />,
      title: t('educationApproach1Title'),
      description: t('educationApproach1Description')
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-mint-500" />,
      title: t('educationApproach2Title'),
      description: t('educationApproach2Description')
    },
    {
      icon: <Users className="w-8 h-8 text-mint-500" />,
      title: t('educationApproach3Title'),
      description: t('educationApproach3Description')
    }
  ];

  const programs = [
    {
      title: "For Young Innovators - Ages 8-18",
      programName: "The AI Explorers Program",
      description: "Our flagship offering for children and teenagers. Through interactive after-school clubs, holiday camps, and in-school workshops, students get hands-on experience with:",
      features: [
        "Creative Coding & AI Art Generation",
        "Building Simple Machine Learning Models",
        "Understanding AI Ethics & Safety",
        "Designing AI-powered solutions for community problems"
      ],
      icon: <GraduationCap className="w-12 h-12 text-mint-500" />
    },
    {
      title: "For Educators & Institutions",
      programName: "Educator Empowerment Workshops",
      description: "We equip teachers and institutions with the tools and training to bring world-class AI education into their own classrooms. Our \"train-the-trainer\" model includes:",
      features: [
        "In-depth curriculum training based on EU best practices",
        "Hands-on sessions with the latest educational AI tools",
        "Strategies for integrating STEM and AI concepts across subjects"
      ],
      icon: <Building className="w-12 h-12 text-mint-500" />
    },
    {
      title: "For Community & Adult Learners",
      programName: "Digital Inclusion Initiatives",
      description: "In partnership with local organizations, we host free or low-cost workshops for adults looking to understand the technologies shaping their world. These sessions focus on:",
      features: [
        "Demystifying AI: What it is and how it impacts daily life",
        "Practical AI tools for personal and professional productivity",
        "Building digital confidence and lifelong learning skills"
      ],
      icon: <Heart className="w-12 h-12 text-mint-500" />
    }
  ];

  const partners = [
    "Schools & Universities",
    "Local Government & Public Libraries",
    "Community Centers & Non-Profits",
    "Corporate Sponsors for Social Responsibility"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-charcoal-900 dark:to-charcoal-800">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-mint-600 via-lavender-600 to-coral-500 bg-clip-text text-transparent mb-6">
            {t('educationTitle')}
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            {t('educationSubtitle')}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
            {t('educationDescription')}
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              {t('educationMissionTitle')}
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-600 dark:text-gray-300">
                {t('educationMissionText1')}
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                {t('educationMissionText2')}
              </p>
            </div>
            <div className="flex justify-center">
              <div className="w-64 h-64 bg-gradient-to-br from-mint-500/20 to-lavender-500/20 rounded-full flex items-center justify-center">
                <Brain className="w-32 h-32 text-mint-500" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              {t('educationApproachTitle')}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
              {t('educationApproachDescription')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {approaches.map((approach, index) => (
              <div key={index} className="bg-card rounded-xl p-6 shadow-sm border border-border text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-mint-400 to-lavender-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  {approach.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {approach.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {approach.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              {t('educationProgramsTitle')}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              {t('educationProgramsDescription')}
            </p>
          </div>
          
          <div className="space-y-12">
            {programs.map((program, index) => (
              <div key={index} className="bg-card rounded-xl p-8 shadow-sm border border-border">
                <div className="flex flex-col sm:flex-row gap-6 items-start">
                  <div className="flex-shrink-0 w-full sm:w-48 h-48 bg-gradient-to-br from-mint-400 to-lavender-400 rounded-lg flex items-center justify-center">
                    {program.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-4">
                      {program.programName}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      {program.description}
                    </p>
                    <ul className="space-y-3">
                      {program.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-mint-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            {t('educationPartnershipTitle')}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-12">
            {t('educationPartnershipDescription')}
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {partners.map((partner, index) => (
              <div key={index} className="bg-card rounded-lg p-6 shadow-sm border border-border">
                <p className="font-semibold text-foreground">
                  {partner}
                </p>
              </div>
            ))}
          </div>
          
          <p className="text-xl font-semibold text-foreground">
            {t('educationPartnershipCta')}
          </p>
        </div>
      </section>
    </div>
  );
};

export default Education;