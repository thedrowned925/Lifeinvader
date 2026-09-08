import { ScrollView, StyleSheet, Switch, Text, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors, radius } from '@/src/theme';

const rows = [
  ['notifications-outline', 'Akıllı hatırlatmalar', 'Doğru zamanda otomatik uyarılar'],
  ['cloud-outline', 'Bulut yedekleme', 'Daha sonra Pro özelliği'],
  ['lock-closed-outline', 'Gizlilik', 'Yerel öncelikli veri işleme'],
  ['card-outline', 'LifeAdmin Pro', 'Abonelik planı ve özellikler'],
] as const;

export default function SettingsScreen() {
  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.eyebrow}>SETTINGS</Text>
        <Text style={styles.title}>Kontrol sende.</Text>
        <Text style={styles.subtitle}>LifeAdmin mümkün olduğunca sessiz çalışır; hangi otomasyonların açık olduğunu buradan yönetirsin.</Text>

        <View style={styles.proCard}>
          <View style={styles.proIcon}><Ionicons name="sparkles" size={22} color={colors.bg} /></View>
          <View style={{ flex: 1 }}>
            <Text style={styles.proEyebrow}>LIFEADMIN PRO</Text>
            <Text style={styles.proTitle}>Hayat yönetimini otomatikleştir.</Text>
            <Text style={styles.proText}>Sınırsız kayıt, gelişmiş tarama, belge kasası ve aile paylaşımı.</Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Otomasyonlar</Text>
        <View style={styles.list}>
          {rows.map(([icon, title, meta], index) => (
            <View key={title} style={styles.row}>
              <View style={styles.iconBox}><Ionicons name={icon} size={20} color={colors.text} /></View>
              <View style={{ flex: 1 }}>
                <Text style={styles.rowTitle}>{title}</Text>
                <Text style={styles.rowMeta}>{meta}</Text>
              </View>
              {index === 0 ? <Switch value trackColor={{ true: colors.accentSoft }} thumbColor={colors.accent} /> : <Ionicons name="chevron-forward" size={18} color={colors.muted} />}
            </View>
          ))}
        </View>

        <View style={styles.privacy}>
          <Ionicons name="shield-checkmark" size={21} color={colors.accent} />
          <Text style={styles.privacyText}>İlk mimari yerel-öncelikli tasarlandı. Belge analizi servis gerektirmeden çalışabilecek şekilde katmanlanıyor.</Text>
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
  subtitle: { color: colors.muted, fontSize: 14, lineHeight: 21, marginTop: 8, maxWidth: 350 },
  proCard: { flexDirection: 'row', gap: 14, backgroundColor: '#172115', borderColor: '#31452A', borderWidth: 1, borderRadius: radius.lg, padding: 20, marginTop: 25 },
  proIcon: { width: 44, height: 44, borderRadius: 15, backgroundColor: colors.accent, alignItems: 'center', justifyContent: 'center' },
  proEyebrow: { color: colors.accent, fontSize: 10, fontWeight: '900', letterSpacing: 1.4 },
  proTitle: { color: colors.text, fontSize: 17, fontWeight: '900', marginTop: 4 },
  proText: { color: colors.muted, fontSize: 12, lineHeight: 18, marginTop: 5 },
  sectionTitle: { color: colors.text, fontSize: 19, fontWeight: '800', marginTop: 30, marginBottom: 13 },
  list: { backgroundColor: colors.surface, borderRadius: radius.md, borderWidth: 1, borderColor: colors.line, overflow: 'hidden' },
  row: { flexDirection: 'row', alignItems: 'center', padding: 15, borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: colors.line },
  iconBox: { width: 40, height: 40, borderRadius: 13, backgroundColor: colors.surface2, alignItems: 'center', justifyContent: 'center', marginRight: 12 },
  rowTitle: { color: colors.text, fontSize: 14, fontWeight: '700' },
  rowMeta: { color: colors.muted, fontSize: 11, marginTop: 3 },
  privacy: { flexDirection: 'row', gap: 12, padding: 17, marginTop: 18, borderRadius: radius.md, backgroundColor: colors.surface, borderWidth: 1, borderColor: colors.line },
  privacyText: { color: colors.muted, flex: 1, fontSize: 12, lineHeight: 18 },
});
