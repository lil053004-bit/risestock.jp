interface ModernActionButtonProps {
  onClick: () => void;
  disabled?: boolean;
}

export default function ModernActionButton({ onClick, disabled = false }: ModernActionButtonProps) {
  return (
    <>
      <div className="relative animate-fadeIn mt-6 w-full max-w-md mx-auto" style={{ animationDelay: '0.3s' }}>
        <button
          onClick={onClick}
          disabled={disabled}
          className="relative w-full flex items-center justify-center text-white font-bold py-5 px-10 rounded-full transition-all duration-300 hover:scale-105 disabled:cursor-not-allowed disabled:opacity-50 overflow-hidden group"
          style={{
            background: disabled ? 'rgba(156, 163, 175, 0.4)' : 'linear-gradient(135deg, #FBBF24 0%, #F59E0B 100%)',
            height: '64px',
            fontFamily: 'M PLUS Rounded 1c, sans-serif',
            fontSize: '18px',
            letterSpacing: '0.5px',
            boxShadow: disabled ? 'none' : '0 4px 20px rgba(251, 191, 36, 0.4)'
          }}
        >
          <span className="relative z-10">公開市場情報を参照</span>
          {!disabled && (
            <>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shine" />
              <div className="absolute inset-0 rounded-full opacity-50 blur-xl group-hover:opacity-70 transition-opacity"
                style={{
                  background: 'radial-gradient(circle at center, rgba(251, 191, 36, 0.5), transparent 70%)'
                }}
              />
            </>
          )}
        </button>
      </div>
      <div className="mt-4 text-center px-4">
        <div className="inline-block bg-beige-dark/60 backdrop-blur-sm rounded-lg px-4 py-2 border border-border-beige">
          <p className="text-xs text-charcoal-light leading-relaxed" style={{ fontFamily: 'M PLUS Rounded 1c, sans-serif' }}>
            ※本サービスは参考情報の提供のみを目的としており、投資助言・勧誘・推奨ではありません。<br />
            金融商品取引業者ではないため個別の投資助言は行えません。投資判断は必ずご自身の責任で行ってください。<br />
            株式投資には価格変動リスクがあり、元本を失う可能性があります。
          </p>
        </div>
      </div>
    </>
  );
}
