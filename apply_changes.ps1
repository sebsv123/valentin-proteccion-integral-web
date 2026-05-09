$content = [System.IO.File]::ReadAllText('c:\Users\Sebitas\valentin-web\app\seguros\health-insurance-foreigners-spain\page.tsx'
$pattern = [regex]::Escape('        </section>') + '\s*\n\s*' + [regex]::Escape('{/* SPECIALISTS */}')  
$replacement = '        </section>  
  
        {/* Gancho A - Common mistake */}  
        <section className="py-20 bg-slate-900 text-white">  
          <div className="container mx-auto px-4 max-w-4xl text-center">  
            <div className="inline-flex items-center gap-2 bg-red-500/20 border border-red-400/30 >> C:\Users\Sebitas\valentin-web\apply_changes.ps1 && echo             text-red-300 px-4 py-2 rounded-full text-sm font-black uppercase tracking-widest mb-8">  
              ?? Common mistake  
            </div>  
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6 leading-tight">  
              You don'\''t get rejected for not having insurance.<br />  
              <span className="text-red-400">You get rejected for having the wrong one.</span>  
            </h2>  
            <p className="text-xl text-slate-300 leading-relaxed mb-8 max-w-2xl mx-auto">  
              Many policies sold online don'\''t meet immigration requirements -  
              no co-payment coverage, waiting periods, or insufficient minimum coverage.  
              The most common mistake we see: buying a generic policy without checking  
              whether the certificate is actually valid for your specific application.  
            </p>  
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 max-w-xl mx-auto mb-8">  
              <p className="text-emerald-400 font-black text-lg mb-2">  
                We verify it for you - before issuing any certificate.  
              </p>  
              <p className="text-slate-400">  
                We confirm that your policy meets the exact requirements  
                of your specific immigration application.  
              </p>  
            </div>  
            <a  
              href={buildWhatsAppHref("I want you to verify if my insurance is valid for my visa application")}  
              target="_blank"  
              rel="noopener noreferrer"  
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 >> C:\Users\Sebitas\valentin-web\apply_changes.ps1 && echo               text-white px-8 py-4 rounded-xl font-black transition-all shadow-lg"  
            >  
              <WhatsAppIcon className="w-5 h-5" />  
              Check my case now  
            </a>  
          </div>  
        </section>  
  
        {/* SPECIALISTS */}'  
$content = $content -replace $pattern, $replacement  
