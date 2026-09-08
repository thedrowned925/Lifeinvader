import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors, radius } from '@/src/theme';
import { records } from '@/src/data/demo';

export default function VaultScreen() {
  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.eyebrow}>VAULT</Text>
        <Text style={styles.title}>Hayat kasan.</Text>
        <Text style={styles.subtitle}>Belgeler, garantiler, abonelikler ve bakım kayıtları tek yerde.</Text>

        <View style={styles.grid}>
          {[
            ['shield-checkmark', 'Garantiler', '8 kayıt'],
            ['repeat', 'Abonelikler', '5 aktif'],
            ['document-text', 'Belgeler', '12 kayıt'],
            ['construct', 'Bakım', '4 kayıt'],
          ].map(([icon, title, meta]) => (
            <View key={title} style={styles.card}>
              <Ionicons name={icon as keyof typeof Ionicons.glyphMap} size={24} color={colors.accent} />
              <Text style={styles.cardTitle}>{title}</Text>
              <Text style={styles.cardMeta}>{meta}</Text>
            </View>
          ))}
        </View>

        <Text style={styles.sectionTitle}>Son kayıtlar</Text>
        <View style={styles.list}>
          {records.map((item) => (
            <View key={item.id} style={styles.row}>
              <View style={styles.iconBox}>
                <Ionicons name={item.icon as keyof typeof Ionicons.glyphMap} size={20} color={colors.text} />
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.rowTitle}>{item.title}</Text>
                <Text style={styles.rowMeta}>{item.category} · {item.dueLabel}</Text>
              </View>
              <Ionicons name="chevron-forward" size={18} color={colors.muted} />
            </View>
          ))}
        </View>
        <View style={{ height: 110 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.bg },
  content: { paddingHorizontal: 20, paddingTop: 16 },
  eyebrow: { color: colors.accent, fontSize: 11, fontWeight: '900', letterSpacing: 1.8, marginBottom: 8 },
  title: { color: colors.text, fontSize: 30, fontWeight: '900', letterSpacing: -0.8 },
  subtitle: { color: colors.muted, fontSize: 14, lineHeight: 21, marginTop: 8, maxWidth: 340 },
  grid: { flexDirection: 'row', flexWrap: 'wrap', gap: 12, marginTop: 24 },
  card: { width: '48%', backgroundColor: colors.surface, borderRadius: radius.md, padding: 18, borderWidth: 1, borderColor: colors.line },
  cardTitle: { color: colors.text, fontSize: 15, fontWeight: '800', marginTop: 18 },
  cardMeta: { color: colors.muted, fontSize: 12, marginTop: 4 },
  sectionTitle: { color: colors.text, fontSize: 19, fontWeight: '800', marginTop: 30, marginBottom: 13 },
  list: { backgroundColor: colors.surface, borderRadius: radius.md, overflow: 'hidden', borderWidth: 1, borderColor: colors.line },
  row: { flexDirection: 'row', alignItems: 'center', padding: 15, borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: colors.line },
  iconBox: { width: 40, height: 40, borderRadius: 13, backgroundColor: colors.surface2, alignItems: 'center', justifyContent: 'center', marginRight: 12 },
  rowTitle: { color: colors.text, fontSize: 15, fontWeight: '700' },
  rowMeta: { color: colors.muted, fontSize: 12, marginTop: 4, textTransform: 'capitalize' },
});
