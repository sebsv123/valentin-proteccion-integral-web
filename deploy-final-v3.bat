@echo off
cd C:\Users\Sebitas\valentin-web
echo Eliminando imagenes pesadas originales...
git rm public/images/premium/hero-family.webp 2>nul
git rm public/brand/logo-vpi.png 2>nul
echo Agregando cambios...
git add -A
echo Commit...
git commit -m "perf: remove heavy images, force cache clear"
echo Push...
git push origin main
echo Listo! El cache de Vercel se limpiara en 1-2 minutos.
echo.
echo IMPORTANTE: Espera 2-3 minutos y vuelve a probar en PageSpeed.
echo La imagen nueva (hero-family-opt.webp) deberia reducirse de 96 KiB a ~47 KiB.
pause
