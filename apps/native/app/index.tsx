import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Button } from '@repo/ui';

export default function Native() {
	return (
		<View style={styles.container}>
			<Text style={styles.header}>Native</Text>
			<Button
				onClick={() => {
					console.log('Pressed!');
					alert('Pressed!');
				}}
				text='Booppp!'
			/>
			<StatusBar style='auto' />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	},
	header: {
		fontFamily: 'Poppins_700Bold',
		marginBottom: 20,
		fontSize: 36
	}
});
