import React from 'react'

export default function PriceText({ top, color, overlayPercentage = 0 }) {
  return (
    <div className='price-text' style={{ 
      display: 'flex', 
      position: 'relative',
      overflow: 'hidden',
      marginTop: top
    }}>
      <div style={{
        position: 'absolute',
        right: 0,
        top: 0,
        height: '100%',
        width: `${overlayPercentage}%`,
        backgroundColor: color,
        opacity: 0.2,
        zIndex: 1
      }}></div>

      <div className='txt-color' style={{ padding: '8px 0', flex: 1, textAlign: 'center' }}>
        36,920.12
      </div>
      <div style={{ padding: '8px 0', flex: 1, textAlign: 'center' }}>
        0.758965
      </div>
      <div style={{ padding: '8px 0', flex: 1, textAlign: 'center' }}>
        28,020.98
      </div>
    </div>
  );
}