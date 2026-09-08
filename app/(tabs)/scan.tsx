import { useMemo, useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors, radius } from '@/src/theme';
import { analyzeLifeInput } from '@/src/engine/lifeEngine';

export default function ScanScreen() {
  const [sample, setSample] = useState('Samsung OLED TV garanti 2 yıl 08.09.2026 ₺48.900');
  const suggestion = useMemo(() => analyzeLifeInput({ rawText: sample }), [sample]);

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <View style={styles.content}>
        <Text style={styles.eyebrow}>SMART CAPTURE</Text>
        <Text style={styles.title}>Göster. Gerisini biz anlayalım.</Text>
        <Text style={styles.subtitle}>Fiş, garanti belgesi, fatura veya kontratı tara. LifeAdmin ne olduğunu ve ne zaman hatırlatması gerektiğini kendi çıkarır.</Text>

        <Pressable style={styles.scanner}>
          <View style={styles.cornerTL} />
          <View style={styles.cornerTR} />
          <View style={styles.cornerBL} />
          <View style={styles.cornerBR} />
          <View style={styles.scanIcon}><Ionicons name="camera" size={32} color={colors.bg} /></View>
          <Text style={styles.scanTitle}>Belgeyi tara</Text>
          <Text style={styles.scanMeta}>Kamera erişimi hazır</Text>
        </Pressable>

        <View style={styles.preview}>
          <View style={styles.previewTop}>
            <Text style={styles.previewLabel}>YEREL ANALİZ ÖNİZLEMESİ</Text>
            <View style={styles.badge}><Text style={styles.badgeText}>{Math.round(suggestion.confidence * 100)}%</Text></View>
          </View>
          <TextInput value={sample} onChangeText={setSample} multiline style={styles.input} placeholderTextColor={colors.muted} />
          <View style={styles.divider} />
          <View style={styles.resultRow}><Text style={styles.key}>Tür</Text><Text style={styles.value}>{suggestion.category}</Text></View>
          <View style={styles.resultRow}><Text style={styles.key}>Tarih</Text><Text style={styles.value}>{suggestion.detectedDate ?? '—'}</Text></View>
          <View style={styles.resultRow}><Text style={styles.key}>Tutar</Text><Text style={styles.value}>{suggestion.amount ?? '—'}</Text></View>
          <View style={styles.resultRow}><Text style={styles.key}>Hatırlatma</Text><Text style={styles.value}>{suggestion.suggestedReminderDays?.join(' / ')} gün önce</Text></View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.bg },
  content: { flex: 1, paddingHorizontal: 20, paddingTop: 16 },
  eyebrow: { color: colors.accent, fontSize: 11, fontWeight: '900', letterSpacing: 1.8, marginBottom: 8 },
  title: { color: colors.text, fontSize: 30, lineHeight: 35, fontWeight: '900', letterSpacing: -0.9, maxWidth: 340 },
  subtitle: { color: colors.muted, fontSize: 14, lineHeight: 21, marginTop: 9 },
  scanner: { height: 245, marginTop: 24, borderRadius: radius.lg, backgroundColor: '#0E141B', borderWidth: 1, borderColor: '#2B3544', alignItems: 'center', justifyContent: 'center' },
  scanIcon: { width: 66, height: 66, borderRadius: 22, backgroundColor: colors.accent, alignItems: 'center', justifyContent: 'center' },
  scanTitle: { color: colors.text, fontSize: 18, fontWeight: '800', marginTop: 16 },
  scanMeta: { color: colors.muted, fontSize: 12, marginTop: 5 },
  cornerTL: { position: 'absolute', top: 20, left: 20, width: 34, height: 34, borderTopWidth: 3, borderLeftWidth: 3, borderColor: colors.accent, borderTopLeftRadius: 10 },
  cornerTR: { position: 'absolute', top: 20, right: 20, width: 34, height: 34, borderTopWidth: 3, borderRightWidth: 3, borderColor: colors.accent, borderTopRightRadius: 10 },
  cornerBL: { position: 'absolute', bottom: 20, left: 20, width: 34, height: 34, borderBottomWidth: 3, borderLeftWidth: 3, borderColor: colors.accent, borderBottomLeftRadius: 10 },
  cornerBR: { position: 'absolute', bottom: 20, right: 20, width: 34, height: 34, borderBottomWidth: 3, borderRightWidth: 3, borderColor: colors.accent, borderBottomRightRadius: 10 },
  preview: { marginTop: 18, backgroundColor: colors.surface, borderRadius: radius.md, borderWidth: 1, borderColor: colors.line, padding: 17 },
  previewTop: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  previewLabel: { color: colors.muted, fontSize: 10, fontWeight: '900', letterSpacing: 1.2 },
  badge: { backgroundColor: colors.accentSoft, paddingHorizontal: 10, paddingVertical: 5, borderRadius: 999 },
  badgeText: { color: colors.accent, fontSize: 11, fontWeight: '900' },
  input: { color: colors.text, fontSize: 13, lineHeight: 19, marginTop: 13, minHeight: 46 },
  divider: { height: 1, backgroundColor: colors.line, marginVertical: 12 },
  resultRow: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 5 },
  key: { color: colors.muted, fontSize: 12 },
  value: { color: colors.text, fontSize: 12, fontWeight: '700', textTransform: 'capitalize' },
});
