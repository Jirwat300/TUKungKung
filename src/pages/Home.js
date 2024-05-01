import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';

const Home = () => {
  const swiperImages = [
    <Image key={1} source={require('../../public/Dis1.jpg')} style={styles.slideImage} />,
    <Image key={2} source={require('../../public/Dis2.png')} style={styles.slideImage} />,
    <Image key={3} source={require('../../public/Dis3.png')} style={styles.slideImage} />,
    <Image key={4} source={require('../../public/Dis4.png')} style={styles.slideImage} />
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Discover</Text>
      <Swiper style={styles.wrapper} showsButtons={true} autoplay={true}>
        {swiperImages}
      </Swiper>

      <Text style={styles.subTitle}>ประกาศ</Text>
      <View style={styles.imageBox}>
        <Image
          source={require('../../public/Annouce1.png')}
          style={styles.announcementImage}
        />
        <Text style={styles.imageName}>เเจ้งเตือนค่าฝุ่น PM 2.5 อันตรายเกินขีด</Text>
        <Text style={styles.imageDescription}>โปรดระมัดระวังหลีกเลี่ยงการสูดอากาศโดยตรง สวมใส่เเมสทุกครั้ง</Text>
      </View>
      <View style={styles.imageBox}>
        <Image
          source={require('../../public/Annouce2.png')}
          style={styles.announcementImage}
        />
        <Text style={styles.imageName}>ธรรมศาสตร์จัดให้!! GPT 4</Text>
        <Text style={styles.imageDescription}>เปิดให้ใช้งาน GPT 4 ได้เเล้วที่ ห้องสมุดวันนี้</Text>
      </View>
      <View style={styles.imageBox}>
        <Image
          source={require('../../public/Annouce3.jpg')}
          style={styles.announcementImage}
        />
        <Text style={styles.imageName}>ธรรมศาสตร์จัดให้!! Canva Pro</Text>
        <Text style={styles.imageDescription}>เปิดให้ใช้งาน Canva Pro ได้เเล้ววันนี้เพียงล็อคอินด้วย Email นักศึกษา</Text>
      </View>
      <View style={styles.imageBox}>
        <Image
          source={require('../../public/Annouce4.png')}
          style={styles.announcementImage}
        />
        <Text style={styles.imageName}>เปิดเเล้ววันนี้!! ตลาดนัดเพื่อนักศึกษา</Text>
        <Text style={styles.imageDescription}>ณ ทางเข้าหอสมุดป๋วย อึ๊งภากรณ์ (27 ก.พ. - 1 มี.ค.)</Text>
      </View>

      <Text style={styles.subTitle}>ข่าวสาร</Text>
      <View style={styles.newsContainer}>
        <TouchableOpacity style={styles.newsBox}>
          <Image
            source={require('../../public/new1.png')}
            style={styles.newsImage}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.newsBox}>
          <Image
            source={require('../../public/new2.png')}
            style={styles.newsImage}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.newsBox}>
          <Image
            source={require('../../public/new3.png')}
            style={styles.newsImage}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.newsBox}>
          <Image
            source={require('../../public/new4.png')}
            style={styles.newsImage}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.newsBox}>
          <Image
            source={require('../../public/new5.png')}
            style={styles.newsImage}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.newsBox}>
          <Image
            source={require('../../public/new6.png')}
            style={styles.newsImage}
          />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  subTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'left',
    marginLeft: 20,
    marginTop: 20,
  },
  wrapper: {
    height: 200,
  },
  slideImage: {
    width: '100%',
    height: '100%',
  },
  imageBox: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginHorizontal: 20,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  announcementImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  imageName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  imageDescription: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 10,
  },
  newsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginHorizontal: 10,
  },
  newsBox: {
    width: '48%',
    aspectRatio: 1,
    backgroundColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
    borderRadius: 10,
  },
  newsImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 10,
  },
});

export default Home;