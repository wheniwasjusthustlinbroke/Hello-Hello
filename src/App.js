import React, { useState } from 'react';
import { Heart, Sparkles, Crown, Send, ArrowLeft, Check } from 'lucide-react';

const App = () => {
  const [currentView, setCurrentView] = useState('gallery');
  const [selectedCard, setSelectedCard] = useState(null);
  const [recipientEmail, setRecipientEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const cards = [
    { id: 1, name: 'Classic Birthday', price: 0, tier: 'free', emoji: '🎂', color: 'bg-pink-100' },
    { id: 2, name: 'Simple Christmas', price: 0, tier: 'free', emoji: '🎄', color: 'bg-green-100' },
    { id: 3, name: 'Basic Thank You', price: 0, tier: 'free', emoji: '💙', color: 'bg-blue-100' },
    { id: 4, name: 'Elegant Birthday', price: 1.99, tier: 'premium', emoji: '🎊', color: 'bg-purple-200' },
    { id: 5, name: 'Luxury Christmas', price: 2.99, tier: 'premium', emoji: '🎁', color: 'bg-red-200' },
    { id: 6, name: 'Golden Anniversary', price: 2.99, tier: 'premium', emoji: '💍', color: 'bg-yellow-200' },
    { id: 7, name: 'Royal Wedding', price: 9.99, tier: 'exclusive', emoji: '👑', color: 'bg-indigo-300' },
    { id: 8, name: 'Diamond Birthday', price: 12.99, tier: 'exclusive', emoji: '💎', color: 'bg-cyan-300' },
    { id: 9, name: 'Platinum Christmas', price: 14.99, tier: 'exclusive', emoji: '✨', color: 'bg-slate-300' },
  ];

  const handleSelectCard = (card) => {
    setSelectedCard(card);
    setCurrentView('customize');
    setSent(false);
  };

  const handleSend = () => {
    if (recipientEmail && message) {
      setSent(true);
      setTimeout(() => {
        setCurrentView('gallery');
        setSelectedCard(null);
        setRecipientEmail('');
        setMessage('');
        setSent(false);
      }, 2000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-purple-50 to-blue-50">
      <div className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Heart className="w-8 h-8 text-rose-500" fill="currentColor" />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-rose-600 to-purple-600 bg-clip-text text-transparent">
              CardVerse
            </h1>
          </div>
          {currentView === 'customize' && (
            <button onClick={() => setCurrentView('gallery')} className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
              <ArrowLeft className="w-5 h-5" />
              Back to Gallery
            </button>
          )}
        </div>
      </div>

      {currentView === 'gallery' && (
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Send Beautiful Cards</h2>
            <p className="text-xl text-gray-600">From heartfelt to luxurious - find the perfect card for any occasion</p>
          </div>

          <div className="mb-12">
            <div className="flex items-center gap-2 mb-4">
              <Heart className="w-6 h-6 text-gray-600" />
              <h3 className="text-2xl font-bold text-gray-900">Free Cards</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {cards.filter(c => c.tier === 'free').map(card => (
                <CardTile key={card.id} card={card} onSelect={handleSelectCard} />
              ))}
            </div>
          </div>

          <div className="mb-12">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-6 h-6 text-purple-600" />
              <h3 className="text-2xl font-bold text-gray-900">Premium Cards</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {cards.filter(c => c.tier === 'premium').map(card => (
                <CardTile key={card.id} card={card} onSelect={handleSelectCard} />
              ))}
            </div>
          </div>

          <div className="mb-12">
            <div className="flex items-center gap-2 mb-4">
              <Crown className="w-6 h-6 text-yellow-600" />
              <h3 className="text-2xl font-bold text-gray-900">Exclusive Cards</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {cards.filter(c => c.tier === 'exclusive').map(card => (
                <CardTile key={card.id} card={card} onSelect={handleSelectCard} />
              ))}
            </div>
          </div>
        </div>
      )}

      {currentView === 'customize' && selectedCard && (
        <div className="max-w-3xl mx-auto px-4 py-8">
          {sent ? (
            <div className="bg-white rounded-2xl shadow-xl p-12 text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Card Sent!</h3>
              <p className="text-lg text-gray-600">Your beautiful card is on its way to {recipientEmail}</p>
            </div>
          ) : (
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className={`${selectedCard.color} p-16 text-center relative`}>
                <div className="text-8xl mb-6">{selectedCard.emoji}</div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">{selectedCard.name}</h3>
                {selectedCard.price > 0 && (
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                    <span className="text-lg font-bold text-gray-900">£{selectedCard.price}</span>
                  </div>
                )}
                {message && (
                  <div className="mt-8 bg-white/50 backdrop-blur-sm rounded-lg p-6 max-w-md mx-auto">
                    <p className="text-gray-800 italic text-lg">{message}</p>
                  </div>
                )}
              </div>

              <div className="p-8">
                <h4 className="text-xl font-bold text-gray-900 mb-6">Customize Your Card</h4>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Recipient Email</label>
                    <input
                      type="email"
                      value={recipientEmail}
                      onChange={(e) => setRecipientEmail(e.target.value)}
                      placeholder="friend@example.com"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Your Message</label>
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Write your heartfelt message here..."
                      rows="4"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none"
                    />
                  </div>
                  <button
                    onClick={handleSend}
                    disabled={!recipientEmail || !message}
                    className="w-full bg-gradient-to-r from-rose-500 to-purple-600 text-white font-bold py-4 rounded-lg hover:from-rose-600 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 transition-all"
                  >
                    <Send className="w-5 h-5" />
                    {selectedCard.price > 0 ? `Send Card (£${selectedCard.price})` : 'Send Free Card'}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

const CardTile = ({ card, onSelect }) => {
  return (
    <div onClick={() => onSelect(card)} className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer transform hover:scale-105 transition-all duration-200 hover:shadow-2xl">
      <div className={`${card.color} p-12 text-center`}>
        <div className="text-6xl mb-4">{card.emoji}</div>
      </div>
      <div className="p-4">
        <h4 className="font-bold text-gray-900 mb-2">{card.name}</h4>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-gray-900">{card.price === 0 ? 'Free' : `£${card.price}`}</span>
          {card.tier === 'exclusive' && <Crown className="w-5 h-5 text-yellow-600" />}
          {card.tier === 'premium' && <Sparkles className="w-5 h-5 text-purple-600" />}
        </div>
      </div>
    </div>
  );
};

export default App;
