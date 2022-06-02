import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';


export default function QRScanner() {
  const [hasPermission, setHasPermission] = useState(null);

  const [scanned, setScanned] = useState(false);
  const [scanTrigger, setScanTrigger] = useState(false);
  const toolScanned = () => {
    setScanTrigger(true)
  }

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    alert (`${data} has been scanned out to your profile`);
   
  };

  const scanResult = (data) => {
    if (data)
    setScanned(data)
};
  
if (scanned === true) {
    return <Text>Scanned</Text>
}
  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

{/* Delete the function below if necessary. I'm trying to display the data from the scan on it */}

  const showData = () => {
      return (
<Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />
      )
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        onEvent={toolScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
    
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
    },
    camera: {
        flex: 1,

    }
}); 