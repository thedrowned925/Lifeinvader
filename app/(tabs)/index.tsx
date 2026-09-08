import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors, radius, space } from '@/src/theme';
import { records } from '@/src/data/demo';

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <View style={styles.stat}>
      <Text style={styles.statValue}>{value}</Text>
      <Text style={styles.statLabel}>{label}</Text>
    </View>
  );
}

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.topRow}>
          <View>
            <Text style={styles.eyebrow}>LIFEADMIN</Text>
            <Text style={styles.title}>İyi akşamlar, Hasan.</Text>
          </View>
          <View style={styles.avatar}><Text style={styles.avatarText}>H</Text></View>
        </View>

        <View style={styles.hero}>
          <View style={styles.heroTop}>
            <View>
              <Text style={styles.heroLabel}>LIFE HEALTH</Text>
              <Text style={styles.score}>87<Text style={styles.scoreSuffix}>/100</Text></Text>
            </View>
            <View style={styles.pulse}><Ionicons name="pulse" size={24} color={colors.accent} /></View>
          </View>
          <Text style={styles.heroCopy}>7 şey yakında ilgini gerektiriyor. Geri kalanını biz takip ediyoruz.</Text>
          <View style={styles.statsRow}>
            <Stat value="5" label="Yaklaşan" />
            <Stat value="12" label="Aktif" />
            <Stat value="3" label="Bu ay" />
          </View>
        </View>

        <View style={styles.sectionHead}>
          <Text style={styles.sectionTitle}>Sıradaki işler</Text>
          <Text style={styles.sectionAction}>Tümünü gör</Text>
        </View>

        <View style={styles.timeline}>
          {records.slice(0, 4).map((item) => (
            <View key={item.id} style={styles.item}>
              <View style={[styles.iconBox, item.urgency === 'today' && styles.iconBoxHot]}>
                <Ionicons name={item.icon as keyof typeof Ionicons.glyphMap} size={21} color={item.urgency === 'today' ? colors.bg : colors.text} />
              </View>
              <View style={styles.itemCopy}>
                <Text style={styles.itemTitle}>{item.title}</Text>
                <Text style={styles.itemMeta}>{item.dueLabel}{item.amount ? `  ·  ${item.amount}` : ''}</Text>
              </View>
              <Ionicons name="chevron-forward" size={18} color={colors.muted} />
            </View>
          ))}
        </View>

        <View style={styles.insight}>
          <View style={styles.insightIcon}><Ionicons name="sparkles" size={22} color={colors.cyan} /></View>
          <View style={{ flex: 1 }}>
            <Text style={styles.insightLabel}>OTOMATİK İÇGÖRÜ</Text>
            <Text style={styles.insightTitle}>3 aboneliğin bu ay yenilenecek</Text>
            <Text style={styles.insightText}>Toplam tahmini ödeme ₺587. Gereksiz yenilemeleri erkenden fark et.</Text>
          </View>
        </View>

        <View style={{ height: 110 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.bg },
  content: { paddingHorizontal: 20, paddingTop: 16 },
  topRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 26 },
  eyebrow: { color: colors.accent, fontSize: 11, fontWeight: '800', letterSpacing: 1.8, marginBottom: 8 },
  title: { color: colors.text, fontSize: 29, lineHeight: 34, fontWeight: '800', letterSpacing: -0.8 },
  avatar: { width: 46, height: 46, borderRadius: 23, backgroundColor: colors.surface2, alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: colors.line },
  avatarText: { color: colors.text, fontWeight: '800', fontSize: 16 },
  hero: { backgroundColor: colors.surface, borderRadius: radius.lg, padding: 22, borderWidth: 1, borderColor: colors.line },
  heroTop: { flexDirection: 'row', justifyContent: 'space-between' },
  heroLabel: { color: colors.muted, fontSize: 11, fontWeight: '800', letterSpacing: 1.3 },
  score: { color: colors.text, fontSize: 58, fontWeight: '900', letterSpacing: -3, marginTop: 4 },
  scoreSuffix: { color: colors.muted, fontSize: 20, fontWeight: '700', letterSpacing: -1 },
  pulse: { width: 48, height: 48, borderRadius: 16, backgroundColor: colors.accentSoft, alignItems: 'center', justifyContent: 'center' },
  heroCopy: { color: '#BCC5D1', fontSize: 15, lineHeight: 22, maxWidth: 310, marginTop: 8 },
  statsRow: { flexDirection: 'row', marginTop: 22, borderTopWidth: 1, borderTopColor: colors.line, paddingTop: 18 },
  stat: { flex: 1 },
  statValue: { color: colors.text, fontSize: 18, fontWeight: '800' },
  statLabel: { color: colors.muted, fontSize: 12, marginTop: 3 },
  sectionHead: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 30, marginBottom: 13 },
  sectionTitle: { color: colors.text, fontSize: 19, fontWeight: '800' },
  sectionAction: { color: colors.muted, fontSize: 13, fontWeight: '700' },
  timeline: { backgroundColor: colors.surface, borderRadius: radius.md, overflow: 'hidden', borderWidth: 1, borderColor: colors.line },
  item: { flexDirection: 'row', alignItems: 'center', padding: 15, borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: colors.line },
  iconBox: { width: 42, height: 42, borderRadius: 14, alignItems: 'center', justifyContent: 'center', backgroundColor: colors.surface2 },
  iconBoxHot: { backgroundColor: colors.accent },
  itemCopy: { flex: 1, marginLeft: 13 },
  itemTitle: { color: colors.text, fontSize: 15, fontWeight: '700' },
  itemMeta: { color: colors.muted, fontSize: 12, marginTop: 4 },
  insight: { marginTop: 22, flexDirection: 'row', padding: 18, gap: 14, borderRadius: radius.md, backgroundColor: '#0E1820', borderWidth: 1, borderColor: '#1C3341' },
  insightIcon: { width: 40, height: 40, borderRadius: 13, alignItems: 'center', justifyContent: 'center', backgroundColor: '#102733' },
  insightLabel: { color: colors.cyan, fontSize: 10, fontWeight: '900', letterSpacing: 1.4 },
  insightTitle: { color: colors.text, fontSize: 15, fontWeight: '800', marginTop: 5 },
  insightText: { color: colors.muted, fontSize: 13, lineHeight: 19, marginTop: 4 },
});
