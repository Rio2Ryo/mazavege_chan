'use client'

export default function DownloadPage() {
    return (
        <div
            style={{
                minHeight: '100vh',
                backgroundColor: '#000',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '20px',
                fontFamily: "'Exo 2', 'Rajdhani', sans-serif",
            }}
        >
            <div
                style={{
                    border: '1px solid rgba(74, 222, 128, 0.3)',
                    borderRadius: '16px',
                    padding: '48px 40px',
                    maxWidth: '720px',
                    width: '100%',
                    backgroundColor: 'rgba(15, 23, 42, 0.6)',
                    backdropFilter: 'blur(12px)',
                }}
            >
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: '40px',
                    }}
                >
                    {/* Left Column - Achieve */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                        <h2
                            style={{
                                color: '#4ade80',
                                fontSize: '16px',
                                fontWeight: 700,
                                textAlign: 'center',
                                letterSpacing: '0.05em',
                                marginBottom: '8px',
                            }}
                        >
                            Mother Vegetable Achieve
                        </h2>
                        <a
                            href="#"
                            style={{
                                display: 'block',
                                backgroundColor: '#000',
                                border: '1px solid rgba(74, 222, 128, 0.25)',
                                borderRadius: '10px',
                                padding: '20px 16px',
                                textAlign: 'center',
                                color: '#4ade80',
                                fontSize: '15px',
                                fontWeight: 600,
                                textDecoration: 'none',
                                cursor: 'default',
                                opacity: 0.4,
                                transition: 'all 0.3s ease',
                            }}
                        >
                            English
                        </a>
                        <a
                            href="/achieve-guide.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                display: 'block',
                                backgroundColor: '#000',
                                border: '1px solid rgba(74, 222, 128, 0.25)',
                                borderRadius: '10px',
                                padding: '20px 16px',
                                textAlign: 'center',
                                color: '#4ade80',
                                fontSize: '15px',
                                fontWeight: 600,
                                textDecoration: 'none',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.borderColor = '#4ade80';
                                e.currentTarget.style.boxShadow = '0 0 20px rgba(74, 222, 128, 0.15)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.borderColor = 'rgba(74, 222, 128, 0.25)';
                                e.currentTarget.style.boxShadow = 'none';
                            }}
                        >
                            日本語
                        </a>
                    </div>

                    {/* Right Column - Confidence */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                        <h2
                            style={{
                                color: '#4ade80',
                                fontSize: '16px',
                                fontWeight: 700,
                                textAlign: 'center',
                                letterSpacing: '0.05em',
                                marginBottom: '8px',
                            }}
                        >
                            Mother Vegetable Confidence
                        </h2>
                        <a
                            href="#"
                            style={{
                                display: 'block',
                                backgroundColor: '#000',
                                border: '1px solid rgba(74, 222, 128, 0.25)',
                                borderRadius: '10px',
                                padding: '20px 16px',
                                textAlign: 'center',
                                color: '#4ade80',
                                fontSize: '15px',
                                fontWeight: 600,
                                textDecoration: 'none',
                                cursor: 'default',
                                opacity: 0.4,
                                transition: 'all 0.3s ease',
                            }}
                        >
                            English
                        </a>
                        <a
                            href="/confidence-guide.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                display: 'block',
                                backgroundColor: '#000',
                                border: '1px solid rgba(74, 222, 128, 0.25)',
                                borderRadius: '10px',
                                padding: '20px 16px',
                                textAlign: 'center',
                                color: '#4ade80',
                                fontSize: '15px',
                                fontWeight: 600,
                                textDecoration: 'none',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.borderColor = '#4ade80';
                                e.currentTarget.style.boxShadow = '0 0 20px rgba(74, 222, 128, 0.15)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.borderColor = 'rgba(74, 222, 128, 0.25)';
                                e.currentTarget.style.boxShadow = 'none';
                            }}
                        >
                            日本語
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
