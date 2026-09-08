export type LifeRecord = {
  id: string;
  title: string;
  category: 'subscription' | 'warranty' | 'document' | 'maintenance' | 'bill';
  dueLabel: string;
  date: string;
  amount?: string;
  icon: string;
  urgency: 'normal' | 'soon' | 'today';
};

export const records: LifeRecord[] = [
  { id: '1', title: 'Internet faturası', category: 'bill', dueLabel: 'Bugün', date: '2026-09-08', amount: '₺689', icon: 'wifi', urgency: 'today' },
  { id: '2', title: 'Spotify', category: 'subscription', dueLabel: '3 gün sonra', date: '2026-09-11', amount: '₺99', icon: 'musical-notes', urgency: 'soon' },
  { id: '3', title: 'Araç bakımı', category: 'maintenance', dueLabel: '6 gün sonra', date: '2026-09-14', icon: 'car-sport', urgency: 'soon' },
  { id: '4', title: 'iPhone garantisi', category: 'warranty', dueLabel: '24 gün sonra', date: '2026-10-02', icon: 'phone-portrait', urgency: 'normal' },
  { id: '5', title: 'Pasaport', category: 'document', dueLabel: '6 ay sonra', date: '2027-03-08', icon: 'document-text', urgency: 'normal' },
];
