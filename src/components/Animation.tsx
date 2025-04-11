import { useState, useEffect } from 'react';

export default function AnimatedName() {
    const fullName = "Kriattiphum Phokar";
    const [visibleLetters, setVisibleLetters] = useState(0);
    const [showCursor, setShowCursor] = useState(true);
    const [animationComplete, setAnimationComplete] = useState(false);

    // Type-writer effect
    useEffect(() => {
        if (visibleLetters < fullName.length) {
            const timer = setTimeout(() => {
                setVisibleLetters(prev => prev + 1);
            }, 150);
            return () => clearTimeout(timer);
        } else {
            setAnimationComplete(true);
        }
    }, [visibleLetters, fullName.length]);

    // Blinking cursor
    useEffect(() => {
        const interval = setInterval(() => {
            setShowCursor(prev => !prev);
        }, 500);
        return () => clearInterval(interval);
    }, []);

    // Rainbow animation for when text is fully displayed
    const letterColors = [
        'text-blue-500',
        'text-indigo-500',
        'text-purple-500',
        'text-pink-500',
        'text-red-500',
        'text-orange-500',
        'text-yellow-500',
        'text-green-500',
        'text-teal-500',
        'text-cyan-500',
    ];

    return (
        <div>
            <div className="text-center p-4 rounded-lg bg-gray-800 shadow-2xl">
                <h1 className="md:text-5xl text-2xl font-bold">
                    {fullName.split('').map((letter, index) => {
                        // Only show letters that should be visible
                        if (index >= visibleLetters) {
                            return null;
                        }

                        // Apply hover and animation effects when all letters are visible
                        return (
                            <span
                                key={index}
                                className={`inline-block transition-all duration-300 transform hover:scale-125 hover:rotate-6 ${animationComplete ? `${letterColors[index % letterColors.length]} hover:text-white` : 'text-white'
                                    }`}
                                style={{
                                    animation: animationComplete ? `float 3s ease-in-out ${index * 0.1}s infinite` : 'none',
                                    opacity: 1,
                                }}
                            >
                                {letter}
                            </span>
                        );
                    })}
                    {!animationComplete && showCursor && (
                        <span className="inline-block w-2 h-8 ml-1 bg-blue-400 animate-pulse" />
                    )}
                </h1>
            </div>

            <style jsx global>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-in-out;
        }
      `}</style>
        </div>
    );
}