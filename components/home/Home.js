import { StyleSheet, Text, View, ImageBackground, KeyboardAvoidingView, Pressable, Image } from 'react-native'
import React from 'react'

const img = {uri: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aG90ZWxzfGVufDB8fDB8fA%3D%3D&w=1000&q=80'};

const Home = () => {
  return (
		<View style={styles.container}>
			<ImageBackground source={img} resizeMode="cover" style={styles.image}>
				<View style={styles.child}/>
				<KeyboardAvoidingView
					style={styles.form}
					// keyboardVerticalOffset = {Header.HEIGHT + 20} // adjust the value here if you need more padding
					behavior = "position">
						<Pressable style={styles.formItem}>
							<Text style={styles.formItemText}> OYO Hotel 10112 </Text>
							<View style={{flexDirection: 'row'}}>
								<Text style={styles.location}> Chennai </Text>
								<Text style={styles.price}> $100 </Text>
							</View>
						</Pressable>
				</KeyboardAvoidingView>
			</ImageBackground>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
	container: {
		//flex: 1,
		justifyContent: "center",
	},
	image: {
		//flex: 1,
		justifyContent: "center",
		alignItems: 'center',
		//backgroundColor: 'rgba(0,0,0,0.5)',
		width: '100%',
		height: '100%',
	},
	child: {
		flex: 1,
		backgroundColor: 'rgba(0,0,0,0.5)',
		width: 500,
		height: 750,
	},
	form: {
		flex: 1,
		//padding: '5%',
		//backgroundColor: 'rgba(70,70,70,0.8)',
		position: 'absolute',
		// top: 100,
		// right: '10%',
		width: '80%',
	},
	formItem: {
		flex: 1,
		flexDirection: 'column',
		padding: '5%',
		//justifyContent: 'space-between',
		alignItems: 'center',
		//marginTop: '5%',
		backgroundColor: 'rgba(70,70,70,0.8)',
	},
	formItemText: {
		fontSize: 20,
		color: 'white',
	},
	location: {
		fontSize: 15,
		color: 'white',
		marginRight: '35%',
	},
	price: {
		fontSize: 15,
		color: 'white',
		marginLeft: '35%',
	},
})