cd "C:\Users\Sebitas\valentin-web"
git add -A
git commit -m "perf: optimización de rendimiento - 5 fixes prioritarios

- FIX 1: Logo con dimensiones fijas (220x54) para ahorrar 23 KiB
- FIX 2: Hero image quality reducida de 85 a 60 para ahorrar 49 KiB
- FIX 3: HeroImage como Server Component para eliminar retraso LCP de 990ms
- FIX 4: min-w en botones del header para eliminar CLS (0.017 -> 0.000)
- FIX 5: Meta Pixel con lazyOnload para no bloquear render inicial"
git push origin main
