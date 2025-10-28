export function PlaceholderImage({ className, text = "Image" }: { className?: string; text?: string }) {
  return (
    <div className={className} style={{
      background: 'linear-gradient(135deg, #1a1a1a 0%, #000 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <span style={{ color: '#D4AF37', fontSize: '18px', fontWeight: 600 }}>
        {text}
      </span>
    </div>
  )
}
