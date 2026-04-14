import { ImageResponse } from 'next/og'

export const alt = 'Valentín Protección Integral'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(to bottom right, #1a2744, #0f172a)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', marginBottom: 40 }}>
          <div style={{ backgroundColor: '#f97316', width: 20, height: 80, marginRight: 15 }} />
          <h1 style={{ fontSize: 72, color: 'white', fontWeight: 'bold', margin: 0 }}>
            Valentín
          </h1>
        </div>
        <p style={{ fontSize: 32, color: '#94a3b8', margin: 0 }}>
          Protección Integral · Asesoría de Seguros
        </p>
        <div style={{ marginTop: 60, display: 'flex', gap: 20 }}>
          <span style={{ background: '#16a34a', color: 'white', padding: '10px 20px', borderRadius: 12, fontSize: 24 }}>Salud</span>
          <span style={{ background: '#16a34a', color: 'white', padding: '10px 20px', borderRadius: 12, fontSize: 24 }}>Vida</span>
          <span style={{ background: '#16a34a', color: 'white', padding: '10px 20px', borderRadius: 12, fontSize: 24 }}>Mascotas</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
