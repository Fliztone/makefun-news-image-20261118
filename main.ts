// news-image-20261118 entry: copies the pre-rendered poster to /output/entry.png
import { copyFileSync } from 'node:fs';
import { join } from 'node:path';
copyFileSync(new URL('./entry.png', import.meta.url), join(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', 'entry.png'));
