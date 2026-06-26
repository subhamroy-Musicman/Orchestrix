import { ImageResponse } from 'next/og';
 
export const runtime = 'edge';
 
// Image metadata
export const alt = 'AutomateAI — Next-Gen AI Data Automation Platform';
export const size = {
  width: 1200,
  height: 630,
};
 
export const contentType = 'image/png';
 
// Image generation
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 64,
          background: '#172B36', // Oceanic Noir
          color: '#F1F6F4', // Arctic Powder
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '40px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '24px' }}>
          {/* A simple placeholder logo using SVG */}
          <svg
            width="80"
            height="80"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ marginRight: '24px' }}
          >
            <path
              d="M8.372 1.349a.75.75 0 0 0-.744 0l-4.81 2.748L8 7.131l5.182-3.034zM14 5.357L8.75 8.43v6.005l4.872-2.784A.75.75 0 0 0 14 11zm-6.75 9.078V8.43L2 5.357V11c0 .27.144.518.378.651z"
              fill="#FFC801"
            />
          </svg>
          <span style={{ fontSize: 72, fontWeight: 700, color: '#FFC801' }}>AutomateAI</span>
        </div>
        <div style={{ fontSize: 48, textAlign: 'center', maxWidth: '900px' }}>
          Next-Gen AI Data Automation Platform
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
