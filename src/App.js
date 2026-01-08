import React, { useState } from 'react';
import { Heart, Sparkles, Crown, Send, ArrowLeft, Check } from 'lucide-react';

const App = () => {
  const [currentView, setCurrentView] = useState('gallery');
  const [selectedCard, setSelectedCard] = useState(null);
  const [recipientEmail, setRecipientEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const cards = [
    // Free Cards
    { id: 1, name: 'Classic Birthday', price: 0, tier: 'free', emoji: '🎂', color: 'bg-pink-100' },
    { id: 2, name: 'Simple Christmas', price: 0, tier: 'free', emoji: '🎄', color: 'bg-green-100' },
    { id: 3, name: 'Basic Th
