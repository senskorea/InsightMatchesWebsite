import React, { useState, useEffect, useCallback } from 'react';
import { Wifi, Gamepad2, Radio, Users, Award, Sparkles } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from './ui/dialog';

const SignalBars = () => (
  <div className="flex items-end gap-[3px] h-8 justify-center mb-3">
    {[8, 12, 16, 20, 24].map((h, i) => (
      <div
        key={i}
        className="w-[4px] rounded-full bg-gradient-to-t from-sky-500 to-slate-500 animate-pulse"
        style={{ height: `${h}px`, animationDelay: `${i * 0.15}s` }}
      />
    ))}
  </div>
);

export const SensPopupModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!sessionStorage.getItem('sens_modal_dismissed')) {
      const timer = setTimeout(() => setIsOpen(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = useCallback(() => {
    setIsOpen(false);
    sessionStorage.setItem('sens_modal_dismissed', 'true');
  }, []);

  return (
    <Dialog open={isOpen} onOpenChange={(open) => { if (!open) handleClose(); }}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto p-0 gap-0">
        <DialogHeader className="p-6 pb-4 bg-gradient-to-r from-sky-500/10 to-slate-500/10 border-b border-border">
          <SignalBars />
          <p className="text-xs font-bold uppercase tracking-widest text-sky-500 text-center">Now Live</p>
          <DialogTitle className="font-inter text-2xl sm:text-3xl font-bold text-center">
            <span className="bg-gradient-to-r from-sky-500 via-slate-500 to-gold-500 bg-clip-text text-transparent">
              Introducing SENS
            </span>
            <br />
            <span className="text-foreground text-lg sm:text-xl">Social infrastructure for events</span>
          </DialogTitle>
          <p className="font-inter text-sm text-muted-foreground text-center mt-2">
            Turn every room into a network. NFC-powered connections, gamified engagement, and real-time analytics.
          </p>
        </DialogHeader>

        <div className="p-6">
          {/* Chips */}
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {[
              { icon: Wifi, label: 'NFC-Powered' },
              { icon: Gamepad2, label: 'Gamified' },
              { icon: Radio, label: 'Real-time' },
            ].map(({ icon: Icon, label }) => (
              <span key={label} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-muted text-xs font-medium text-foreground border border-border">
                <Icon className="w-3.5 h-3.5 text-sky-500" /> {label}
              </span>
            ))}
          </div>

          {/* Highlight cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            <div className="bg-card border border-border rounded-lg p-4 text-center">
              <Users className="w-6 h-6 text-slate-500 mx-auto mb-2" />
              <h4 className="font-semibold text-sm text-foreground mb-1">Instant Connections</h4>
              <p className="text-xs text-muted-foreground">Tap to exchange contacts — no apps, no friction</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-4 text-center">
              <Award className="w-6 h-6 text-sky-500 mx-auto mb-2" />
              <h4 className="font-semibold text-sm text-foreground mb-1">Rewards & Badges</h4>
              <p className="text-xs text-muted-foreground">Gamified engagement that drives participation</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-4 text-center">
              <Sparkles className="w-6 h-6 text-gold-500 mx-auto mb-2" />
              <h4 className="font-semibold text-sm text-foreground mb-1">Custom Experiences</h4>
              <p className="text-xs text-muted-foreground">White-label solutions for any event format</p>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {['Events', 'Conferences', 'Networking', 'Community', 'Web3-ready'].map((tag) => (
              <span key={tag} className="px-3 py-1 rounded-full bg-muted text-xs font-medium text-foreground border border-border">
                {tag}
              </span>
            ))}
          </div>

          {/* CTA */}
          <div className="flex justify-center">
            <a
              href="https://spark-human-flow.lovable.app"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleClose}
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg font-bold font-inter text-sm bg-foreground text-background hover:opacity-90 shadow-lg transition-all"
            >
              Discover SENS →
            </a>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
