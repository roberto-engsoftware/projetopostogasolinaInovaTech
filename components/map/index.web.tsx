import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Station, FuelType } from '@/data/stations';

interface MapProps {
  mapRef: any;
  initialRegion: any;
  stations: Station[];
  fuelType: FuelType;
  onMarkerPress: (station: Station) => void;
  userLocation: any;
}

export default function Map({ stations }: MapProps) {
  return (
    <View style={styles.webContainer}>
      <Text style={styles.title}>🗺️ Modo Visualização (Web)</Text>
      <Text style={styles.subtitle}>
        O mapa interativo está disponível apenas nos aplicativos (Android/iOS).
      </Text>
      <Text style={styles.info}>
        Total de {stations.length} postos carregados em Manaus.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  webContainer: {
    flex: 1,
    backgroundColor: '#f3f4f6',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: '800',
    color: '#1f2937',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#6b7280',
    textAlign: 'center',
    marginBottom: 20,
  },
  info: {
    fontSize: 14,
    color: '#3b82f6',
    fontWeight: '600',
  },
});
