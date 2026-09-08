export type ParsedLifeInput = {
  rawText: string;
};

export type LifeSuggestion = {
  title: string;
  category: 'subscription' | 'warranty' | 'document' | 'maintenance' | 'bill' | 'unknown';
  merchant?: string;
  amount?: string;
  detectedDate?: string;
  suggestedReminderDays?: number[];
  confidence: number;
};

const money = /(₺|TL|TRY|€|\$)\s?([\d.,]+)/i;
const date = /(\d{1,2}[./-]\d{1,2}[./-]\d{2,4})/;

export function analyzeLifeInput({ rawText }: ParsedLifeInput): LifeSuggestion {
  const text = rawText.toLocaleLowerCase('tr-TR');

  let category: LifeSuggestion['category'] = 'unknown';
  let title = 'Yeni kayıt';
  let suggestedReminderDays = [7, 1];

  if (/garanti|warranty/.test(text)) {
    category = 'warranty';
    title = 'Garanti kaydı';
    suggestedReminderDays = [30, 7, 1];
  } else if (/abonelik|subscription|yenileme|renewal|spotify|netflix/.test(text)) {
    category = 'subscription';
    title = 'Abonelik';
    suggestedReminderDays = [7, 1];
  } else if (/fatura|invoice|bill|ödeme/.test(text)) {
    category = 'bill';
    title = 'Fatura';
    suggestedReminderDays = [3, 1];
  } else if (/bakım|servis|maintenance/.test(text)) {
    category = 'maintenance';
    title = 'Bakım kaydı';
    suggestedReminderDays = [14, 3];
  } else if (/pasaport|kimlik|ehliyet|passport|license/.test(text)) {
    category = 'document';
    title = 'Belge';
    suggestedReminderDays = [180, 90, 30];
  }

  const amountMatch = rawText.match(money);
  const dateMatch = rawText.match(date);

  return {
    title,
    category,
    amount: amountMatch ? `${amountMatch[1]}${amountMatch[2]}` : undefined,
    detectedDate: dateMatch?.[1],
    suggestedReminderDays,
    confidence: category === 'unknown' ? 0.35 : 0.82,
  };
}
