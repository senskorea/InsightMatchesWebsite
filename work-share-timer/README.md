# Work & Share timer

Local preview: http://127.0.0.1:5190/work-share-timer/

Frosted neon timer with Plan, Focus, Share and Reset phases. Defaults: 5, 40, 10 and 5 minutes, three rounds. Space toggles playback, manual phase changes pause, restart resets the current phase. Automatic advancement uses absolute deadlines to recover after a background tab or reload.

Configuration gear changes phase durations (1 to 120 minutes) and rounds (1 to 12). Applying timing changes restarts and pauses the current phase. Editing display content alone preserves playback. The right column displays a headline, multiline description and optional PNG/JPEG/WebP upload up to 2 MB, including QR codes. Images use contain framing without cropping.

Clock, configuration and display content persist in localStorage on this browser only. No shared hosted storage or cross device sync. Storage failures display a message. The task board and speaker queue were removed at Paul's request. Share means conversation and feedback during the event.

Checks: node --test work-share-timer/timer-model.test.mjs; npx eslint work-share-timer; npm run build. Local only, no publication.

Phase bell: soft synthesized two-note chime on automatic phase/round boundaries and session completion. Enabled by default; disable in Configuration. Bell next to Configuration plays on demand even when automatic sounds are off. Browser audio unlocks on first click or key press; reloaded running sessions need interaction before audio can play. Sleeping-tab catchup plays one chime, not a backlog.

Phase copy: pencil beside timer instruction opens Configuration, where every phase has an editable instruction and optional line beneath its phase button. Changes persist and do not reset timing. Fullscreen uses an expanded presentation layout with viewport/container scaled digits, headings and phase buttons.

Website URL in Configuration generates a local 768 px QR PNG with four-module white quiet zone and medium error correction. Accepts full HTTP/HTTPS URLs. Save configuration displays the generated image and persists its destination. Uploading a different image clears the QR destination. Automatic timer ticks do not repeatedly rewrite image storage.
