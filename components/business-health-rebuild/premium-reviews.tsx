'use client';
import { useRef, useState, type KeyboardEvent } from 'react';
import { ArrowLeft, ArrowRight, Star } from 'lucide-react';
import type { GoogleReviewsData } from '@/lib/server/google-reviews';
import { googleUrl } from './content';
import p from './premium.module.css';

/** Page-local presentation only. Original Google data/source/cache remain untouched. */
export function PremiumReviews({ data }: { data: GoogleReviewsData }) {
  const rail = useRef<HTMLDivElement>(null);
  const [expanded, setExpanded] = useState<Set<number>>(()=>new Set());
  const [failedPhotos, setFailedPhotos] = useState<Set<number>>(()=>new Set());
  function move(direction: number) { if (rail.current) rail.current.scrollBy({ left: direction*(rail.current.firstElementChild?.getBoundingClientRect().width ?? 300)+direction*24, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth' }); }
  function keyboard(event: KeyboardEvent<HTMLDivElement>) { if(event.target!==event.currentTarget)return;if(event.key==='ArrowLeft'||event.key==='ArrowRight'){event.preventDefault();move(event.key==='ArrowLeft'?-1:1)} }
  return <div className={p.reviewsNative}>
    <div className={p.ratingBar}><div><strong>{data.rating.toLocaleString('es-ES',{minimumFractionDigits:1,maximumFractionDigits:1})}</strong><span><span className={p.ratingStars} role="img" aria-label={`${data.rating} sobre 5`}>{Array.from({length:5},(_,i)=><Star key={i} size={17} fill="currentColor" aria-hidden="true" />)}</span><span>{data.user_ratings_total} reseñas en Google</span></span></div><a href={googleUrl} target="_blank" rel="noreferrer" data-health-cta="google-proof">Ver las opiniones originales <ArrowRight size={16} aria-hidden="true" /></a></div>
    <div className={p.reviewRail} ref={rail} role="region" aria-label="Opiniones originales de Google. Usa las flechas para recorrerlas" tabIndex={0} onKeyDown={keyboard}>
      {data.reviews.map((review,i)=><article className={p.reviewVoice} key={`${review.author_name}-${i}`} data-google-review={i}>
        <div className={p.reviewStars} role="img" aria-label={`${review.rating} sobre 5`}>{Array.from({length:5},(_,j)=><Star key={j} size={13} fill={j<review.rating?'currentColor':'none'} aria-hidden="true" />)}</div>
        <blockquote className={expanded.has(i)?p.reviewBodyExpanded:p.reviewBody}>{review.text}</blockquote>
        {review.text.length>220?<button type="button" className={p.readReview} aria-expanded={expanded.has(i)} onClick={()=>setExpanded(prev=>{const next=new Set(prev);if(next.has(i))next.delete(i);else next.add(i);return next})}>{expanded.has(i)?'Mostrar menos':'Leer opinión completa'}</button>:null}
        <div className={p.reviewPerson}><span className={p.reviewAvatar}>{review.profile_photo_url&&!failedPhotos.has(i)?<img src={review.profile_photo_url} alt="" width={38} height={38} loading="lazy" onError={()=>setFailedPhotos(prev=>new Set(prev).add(i))} />:review.author_name.charAt(0)}</span><div><strong>{review.author_name}</strong><span>{review.relative_time_description}</span></div></div>
      </article>)}
    </div>
    <div className={p.reviewNavigation}><span>Desliza o usa las flechas para leer más opiniones.</span><div><button type="button" aria-label="Opiniones anteriores" onClick={()=>move(-1)}><ArrowLeft size={17} aria-hidden="true" /></button><button type="button" aria-label="Opiniones siguientes" onClick={()=>move(1)}><ArrowRight size={17} aria-hidden="true" /></button></div></div>
  </div>;
}
