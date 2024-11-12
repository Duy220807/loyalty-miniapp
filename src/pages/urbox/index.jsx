import { View, Text, Image } from '@tarojs/components';
import logo from '../../../assets/logo.png'
import egift from '../../../assets/egift.png'
import money from '../../../assets/flat-color-icons_money-transfer.png'
import gift1 from '../../../assets/eGiftCard.png'
import gift2 from '../../../assets/gift2.png'
import gift3 from '../../../assets/gift3.png'
import gift4 from '../../../assets/gift4.png'
import gift5 from '../../../assets/gift5.png'
import gift6 from '../../../assets/gift6.png'
import background from '../../../assets/background2.png'

import './index.scss'

import { AtCard } from 'taro-ui';

// Danh sách các món quà giả
const gifts = [
    {
        id: 1,
        name: "Gift Card 1",
        description: "Thẻ quà tặng trị giá 100.000 VND",
        value: "100.000 VND",
        image: gift1
    },
    {
        id: 2,
        name: "Gift Card 2",
        description: "Thẻ quà tặng trị giá 200.000 VND",
        value: "200.000 VND",
        image: gift2
    },
    {
        id: 3,
        name: "Gift Card 3",
        description: "Thẻ quà tặng trị giá 500.000 VND",
        value: "500.000 VND",
        image: gift3
    },
    {
        id: 4,
        name: "Gift Card 4",
        description: "Thẻ quà tặng trị giá 100.000 VND",
        value: "1.000.000 VND",
        image: gift4
    },
    {
        id: 5,
        name: "Gift Card 5",
        description: "Thẻ quà tặng trị giá 200.000 VND",
        value: "2.000.000 VND",
        image: gift5
    },
    {
        id: 6,
        name: "Gift Card 6",
        description: "Thẻ quà tặng trị giá 500.000 VND",
        value: "5.000.000 VND",
        image: gift6
    },
    // Thêm các món quà khác ở đây...
];

const GiftPage = () => {
    const userInfo = {
        points: 1200,
        rank: 'Gold',
    }

    return (
        <View className="p-4 bg-cover bg-center" style={{
            backgroundImage: `url(${background})`,
            backgroundPosition: 'top',
            backgroundSize: '100% 27%',
            backgroundRepeat: 'no-repeat' // Đảm bảo ảnh nền không bị lặp lại
        }}>
            {/* Logo */}
            <View className="flex justify-center mb-6">
                <Image
                    className="w-72 h-16"
                    src={logo}
                    alt="Logo"
                />
            </View>

            {/* Banner */}
            <View className="mb-6">
                <Image
                    className="w-full h-auto object-cover rounded-lg"
                    src={egift}
                    alt="Banner"
                />
            </View>

            {/* Thông tin người dùng */}
            <View className="bg-white rounded-lg shadow-lg p-5 mb-5">
                <View className="flex items-center space-x-4">
                    <Image
                        className="w-16 h-16 rounded-full"
                        src={money}
                        alt="User Avatar"
                    />
                    <View>
                        <Text className="text-lg font-bold">{userInfo.points} points</Text>
                        <Text className="text-gray-500">Rank: {userInfo.rank}</Text>
                    </View>
                </View>
            </View>

            {/* Danh sách gift với 3 thẻ mỗi hàng */}
            <View className="grid grid-cols-2 gap-8">
                {gifts.map((gift) => (
                    <View
                        key={gift.id}
                        className="bg-white rounded-lg shadow-md flex flex-col items-center"
                    >
                        <Image
                            src={gift.image}
                            alt={gift.name}
                            className="w-full h-auto object-cover rounded-lg mb-4 shadow-xl" // Tăng kích thước ảnh
                        />

                        <Text className="text-gray-500 m-2 text-[0.8rem]">{gift.description}</Text>
                        <Text className="text-blue-500 font-semibold m-2 text-[0.8rem]">{gift.value}</Text>
                    </View>
                ))}
            </View>
        </View>
    );
};

export default GiftPage;
