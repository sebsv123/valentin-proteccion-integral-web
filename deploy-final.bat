@echo off
cd C:\Users\Sebitas\valentin-web
echo Adding files...
git add -A
echo Committing...
git commit -m "perf: optimizacion rendimiento - logo webp, LCP fix, lazy load"
echo Pushing...
git push origin main
echo Done!
pause
