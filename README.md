# MORPHOS APP

**Living Field.** A theremin made of chemistry.

You play a Gray–Scott reaction–diffusion field with your fingers and with the way you hold the phone. The glass opens dark. The first finger is a pitch. Heading and tilt tune the pattern. A second finger adds a fifth. A third adds the octave. Under that sits a soft electronic bass, and Loop can write one bar that plays itself.

Play it: **[morphos.grok.me](https://morphos.grok.me)**

Source: **[IAmM3ta/MORPHOS-APP](https://github.com/IAmM3ta/MORPHOS-APP)** · branch `main`

The product name is **MORPHOS**, subtitle **Living Field**. The repository slug is `MORPHOS-APP` because GitHub does not allow a space. Inside the tree the package and the engine folder are still named `morphogen`. Those names are not the public title.

**[Changelog](CHANGELOG.md)** · **[Instrument guide (PDF)](docs/Morphos-Instrument-Guide.pdf)** · **[HTML guide](docs/morphogen-guide.html)** · **[Republish](docs/GROK-APP-BUILDER-REPUBLISH.md)**

---

## What you are looking at

The screen is one simulation. Two chemicals, U and V, diffuse and react. Where V is alive, the display paints a dark cyan maze on navy. Where it is not, the ground stays near black. That picture is not a wallpaper behind the instrument. It is the instrument.

Touch is sound. Height on the glass is pitch, in the current key and mode. The default voice is a warm sine in D Dorian, about 125–501 Hz. The phone is the other hand: facing north broadens the maze, facing south tightens it, and a tilt changes how it grows. A small movement stirs it.

Nothing on the glass is labeled with theory names. Credits and the long explanation live in the guide.

---

## Play

1. Open [morphos.grok.me](https://morphos.grok.me) and tap **Enter**. That unlocks audio and asks for motion. After Enter, the chips read audio unlocked or failed, and motion on or denied.
2. The menu stays hidden. Along the top, when the chrome is up: **View**, **Reset**, **Rec**, **Loop**, **Play**, **Full**, **Wall**.
3. Touch the field. The first tap voices it. Slide up and the pitch rises. Slide down and it falls. A drag, not a tap, plants new growth.
4. Add a second finger for a fifth, a third for the octave. The three move together.
5. **Loop** writes an eight-step bass bar in the key, then the bar plays itself. **Play** starts or pauses it. Dots along the bottom show which steps are filled.
6. **Rec** records a layer of the whole voice. Layers stack six deep.
7. **Full** is fullscreen. **Wall** clears the chrome, holds the screen awake, and can save an eight-second clip.
8. **Reset** brings the factory field home. **View** opens the full controls. Hide puts them away.
9. Use headphones. The glass is a table in front of you: left and right are azimuth, the top of the glass is farther and higher. Locked notes and loops stay where they were played.

A sticker can open the app already loaded with someone else's chemistry and voice. **Remix** keeps their settings. **Find** looks for a print and lays the living field on the paper.

---

## The glass

Panels are solid (`bg-bg-elevated`), not washed over the cyan. The four faces:

| Face | What it does |
| --- | --- |
| **Play** | Touch to hear the pitch under your finger. |
| **Plant** | Drag to put new growth in the field. |
| **Freeze** | Stop growth. Release lets it grow again. |
| **Stage · Sync** | MIDI and the beat. Permission is requested only from here, never on Enter. |

Status chips, not faces: **Hum · Hands · Field**.

Splash, locked copy: *Tap to start sound. Drag to plant growth. Touch the field to hear it.*

Under that, the Enter line: *Enter unlocks audio. First tap voices the field. Loop writes one bar.*

---

## Sound

Default waveform is **sine**. Triangle, square, saw, and pulse still exist on the Sound face, but a stored harsh waveform is migrated back to sine on load so the instrument does not open as a buzzer. **Spectrum** uses the field as partials.

| Control | Default |
| --- | --- |
| Key | D |
| Mode | Dorian |
| Pitch window | 125.28–501.12 Hz (16× to 64× of 7.83 Hz) |
| Floor | 7.83 Hz, the cavity fundamental. Not the opening pitch. |
| Vibrato | Off. Rate and depth are on the Sound face, not tied to the gyro. |
| Bass | A sine an octave or two under the finger, held in a low register (about 41–98 Hz). |
| Bar | Eight eighth-notes at 76 bpm. Loop writes it, then it plays itself. |

One finger glides with height. Two fingers add a fifth. Three add the octave. **Listen**, on the Sound face, takes a room mic, a dropped file, or a shared browser tab. It does not read Spotify's stream. A hit can seed the field under the fingers. Bass, mids, and highs nudge the chemistry.

Outer billiards is optional. The table is a regular n-gon. The centre holds. Outer rings walk the scale. Orbit defaults to 0, so a finger holds its pitch until you turn the walk on.

---

## The field

Factory rest is **Living** in the **Abyss** palette: feed `0.029`, kill `0.057`, Du `1`, Dv `0.5`. This Laplacian needs diffusion on that scale and a timestep at or below 1. Older, smaller coefficients grew hollow rings and never connected. A stored bubble chemistry is reseeded onto Living.

The field card follows the [VisualPDE parameter layout](https://visualpde.com/user-guide/advanced-options#parameters).

| Symbol | Meaning |
| --- | --- |
| **F**, **k** | Feed and kill. The phone nudges them while you hold it. |
| **Dᵤ**, **Dᵥ** | Diffusion. Heading scales them. Sliders run about 0.2–1.25 and 0.1–0.65. |
| **R**, **B** | Disk brush radius and value. |
| **N**, **Δt** | Steps per frame and timestep. Δt is capped at 1. |
| **L** | Hillshade. |

Species, without a reseed:

| Preset | Character |
| --- | --- |
| Living | Fine mazes. The phone tunes them. Factory. |
| Mazes | Labyrinth walls, porcelain. |
| Fingerprint | Ridge fields. |
| Solitons | Quiet stable spots. |
| Pulsing | Breathing spots. |
| Holes | Perforated sheet. |
| Spirals | Rotating arms. |
| Worms | Wandering filaments. |
| Scale | Morpho ridges. |
| Coral | Branching reefs. |
| Skate | U-skate world. |

Palettes: Abyss, Morpho, Spore, Porcelain, Ember, Chlorophyll, Silver, Field. The ground stays dark. White is not the fill.

Keys `1`–`9` apply the first nine presets.

---

## Capture, editions, stickers

**Still** saves a high-resolution PNG of the field plus an `origin.json` of the chemistry, the voice, and the pose.

An edition is a press of that still: flat, book-match, or kaleidoscope. It is meant for Resolume, TouchDesigner, or print. A glyph plate is a maze-like code of that origin. A phone camera that understands the code opens MORPHOS on those settings. If the app is not installed, the code points at the install path.

**Find** tracks a printed sticker and overlays the living field on the paper. That overlay is the augmented-reality loop: the print is the score, the phone is the performance.

Visual and audio credits stamp the glyph. Tracks can stack into a sleeve, one plate per song.

---

## Stage, MIDI, TouchDesigner

**Stage · Sync** is the only door to MIDI. Enter never prompts for it.

TouchDesigner 087: open Sync and connect a WebSocket DAT as a server. Callbacks ship in [`public/td/morphogen_ws_callbacks.py`](public/td/morphogen_ws_callbacks.py). Packets are v2. A `feedback` block maps onto Blur, Sharpen, Level, Transform, and Feedback reset. The socket is knobs. Pixels stay on NDI, Spout, or a window of the canvas.

MIDI CCs 20–29 carry field stats. CCs 30–35 carry the listen bands.

| CC | Name |
| --- | --- |
| 20–29 | Feed, Kill, Energy, Mean V, centroids, mic, gyro, edge |
| 30–35 | Bass, Mids, Highs, Listen, Blur, Opacity |

---

## Keyboard

Ignored while a text field is focused.

| Key | Action |
| --- | --- |
| Space | Pause or resume the field |
| H | Hide or show the chrome |
| F | Fullscreen |
| R | Reseed |
| Shift+R | Factory reset |
| C | Record or stop a session layer |
| U or ⌘Z / Ctrl+Z | Undo |
| L | Freeze (lock growth) |
| Z | Release one lock |
| Shift+Z | Clear locks |
| Escape | Close the panel and show the chrome |
| 1–9 | Apply a preset |

---

## Run it

Node 22 or newer. A current browser with WebGL2. On iPhone or iPad, Safari or Chrome, and motion permission on the first Enter.

```bash
git clone https://github.com/IAmM3ta/MORPHOS-APP.git
cd MORPHOS-APP
git checkout main
npm install
npm run dev
```

The dev server listens on port **8080**.

```bash
npm run build      # client + Nitro server, Vercel preset, then db migrate
npm run preview    # serve the production build
npm run typecheck
npm test
npm run lint
```

`DATABASE_URL` is optional. Without it, migrate skips and the PGLite fallback migrates itself. Auth is off unless the deployer turns it on. The instrument does not require an account.

---

## Layout

```
src/routes/index.tsx          the instrument
src/routes/r.$code.tsx        open a glyph code
src/components/instrument/    glass, dock, start gate, loop rack, stage
src/lib/morphogen/            chemistry, sound, sensors, glyphs
src/shaders is inlined        GLSL lives in src/lib/morphogen/shaders.ts
public/td/                    TouchDesigner callbacks
public/guide/                 the player PDF
docs/                         guide, republish notes, Bentov spike
backup/                       archived tree of an earlier glass build
```

### Engine modules

| Module | Role |
| --- | --- |
| `rd-engine.ts` | WebGL2 Gray–Scott. Ping-pong field, pixel-space seed, pose-scaled Du/Dv, dt ≤ 1. |
| `shaders.ts` | Sim, seed, display, and stats fragment shaders. The display tone curve keeps the maze dark. |
| `presets.ts` | Species, palettes, waveforms, brush and sim parameter types. |
| `audio-engine.ts` | Polyphonic Web Audio voice, Hum, bass, HRTF placement, layer recorder, groove driver. |
| `groove.ts` | One bar. Eight steps, 76 bpm. Loop writes it, then it plays itself. |
| `theory.ts` | Circle-of-fifths keys, church modes, pentatonic and blues packs, pitch window. |
| `billiards.ts` | Optional outer-billiard walk of the scale. |
| `space.ts` | Glass coordinates to a HRTF room, and to a geographic listener. |
| `sensors.ts` | Motion and compass. Heading, tilt, spin. |
| `runtime.ts` | The frame-to-frame bus: brushes, bands, play amplitude, bass pulse. |
| `store.ts` | Zustand instrument state, persisted. Migrations reseed bad chemistry and harsh waveforms. |
| `loops.ts` | Up to six recorded layers of the whole voice. |
| `history.ts` | Undo checkpoints for a gesture. |
| `glyph.ts` | Encode and decode an origin into a scannable plate. Share URL and sticker render. |
| `origin.ts` | Snapshot of chemistry, voice, pose, and credits. |
| `press.ts` | Flat, mirrored, and kaleidoscope presses, zipped as an edition. |
| `release.ts` | Sleeve: one plate per track. |
| `td-client.ts` / `td-script.ts` | Sync packets and the TouchDesigner callback source. |
| `midi-out.ts` | Web MIDI, opened from Stage only. |
| `homography.ts` | Quad map so a found sticker can take the living overlay. |
| `extract-palette.ts` | Pull a four-stop palette from a dropped image. |

UI around that engine:

| Component | Role |
| --- | --- |
| `morphogen-app.tsx` | The stage. Pointers, keys, wallpaper, the top bar, the render loop. |
| `start-gate.tsx` | Enter, Remix, Find, Guide. |
| `control-dock.tsx` | Play, Plant, Freeze, Stage · Sync, and the field and sound cards. |
| `loop-rack.tsx` | The six voice layers. |
| `key-pad.tsx` | Key and mode. |
| `stage-link.tsx` | TouchDesigner and MIDI connection. |
| `ar-overlay.tsx` | Living field on a found print. |
| `field-library.tsx` | Saved stills. |
| `sensor-remote.tsx` | Another phone as a remote brush. |

---

## Publishing

[morphos.grok.me](https://morphos.grok.me) is served by the Grok app builder, not by GitHub. A push to `main` does not change the live site. Build here, then publish from the builder project that owns that host. Steps: [docs/GROK-APP-BUILDER-REPUBLISH.md](docs/GROK-APP-BUILDER-REPUBLISH.md).

The tagged download of an earlier cut still lives on [morphogen v0.1.0](https://github.com/IAmM3ta/morphogen/releases/tag/v0.1.0). `main` on this repo is ahead of that tag.

---

## Related repositories

These are not this app. Do not push this tree onto them.

| Repo | What it actually is |
| --- | --- |
| [IAmM3ta/MORPHOS-APP](https://github.com/IAmM3ta/MORPHOS-APP) | This instrument. |
| [IAmM3ta/morphogen](https://github.com/IAmM3ta/morphogen) | Previous home of the same instrument. v0.1.0 and the draft `morphos-v2` PR still live there. |
| [IAmM3ta/MORPHOS](https://github.com/IAmM3ta/MORPHOS) | IMAGE_8 generative compression codec. Unrelated history. |
| [IAmM3ta/MORPH-OS](https://github.com/IAmM3ta/MORPH-OS) | A separate semantic-codec sketch. |

---

## Stack

[TanStack Start](https://tanstack.com/start) `~1.168.60`, React 19, Vite, Nitro with the Vercel preset, Tailwind 4, Zustand, WebGL2, Web Audio. WebGPU is a draft on the old `morphos-v2` branch and is not what `main` runs.
