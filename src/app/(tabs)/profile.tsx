import { Alert, Image, Text, TouchableOpacity, View } from "react-native";
import { Feather } from '@expo/vector-icons';
import { Link, Redirect, useRouter } from "expo-router";
import React from "react";


export default function ProfilePage() {
    const router = useRouter();
    function handleDesconect() {
        return (
            Alert.alert('Desconectar', "Tem certeza que deseja se desconectar?", [
                {
                    text: 'Continuar',
                    onPress: () => {return router.replace('/auth');}
                },
                {
                    text: 'Cancelar',
                    style: 'destructive'
                },
            ], { cancelable: true })
        )
    }
    return (
        <View className="flex-1 p-8 bg-white">
            <View className="flex-row items-center gap-4">
                <Image source={{ uri: 'https://github.com/LeonardoSimpldesu.png' }} className="w-20 h-20 rounded-full" />
                <View>
                    <Text className="legenda text-silver">Morador Nº103</Text>
                    <Text className="subtitulo-secao text-smoky-black">Leonardo de Souza</Text>
                    <Text className="legenda text-silver">Bloco B | Apartamento 195</Text>
                    <Text className="legenda text-silver">Status 06/2024</Text>
                </View>
            </View>
            <View className="mt-6">
                <Link href={'/user/personal-information'} asChild>
                    <TouchableOpacity activeOpacity={0.7} className="flex-row items-center gap-6 py-6 border-b-[0.5px] border-silver">
                        <Feather name="clipboard" size={24} />
                        <View>
                            <Text className="font-medium text-black_olive text-base uppercase">Informações Pessoais</Text>
                            <Text className="font-regular text-black_olive text-sm">Minhas informações pessoais</Text>
                        </View>
                        <Feather name="chevron-right" size={24} className="ml-auto" />
                    </TouchableOpacity>
                </Link>
                <Link href={'/user/notifications'} asChild>
                    <TouchableOpacity className="flex-row items-center gap-6 py-6 border-b-[0.5px] border-silver">
                        <Feather name="message-square" size={24} />
                        <View>
                            <Text className="font-medium text-black_olive text-base uppercase">Notificações</Text>
                            <Text className="font-regular text-black_olive text-sm">Minha central de notificações</Text>
                        </View>
                        <Feather name="chevron-right" size={24} className="ml-auto" />
                    </TouchableOpacity>
                </Link>
                <Link href={'/user/personal-information'} asChild>
                    <TouchableOpacity className="flex-row items-center gap-6 py-6">
                        <Feather name="credit-card" size={24} />
                        <View>
                            <Text className="font-medium text-black_olive text-base uppercase">Pagamentos</Text>
                            <Text className="font-regular text-black_olive text-sm">Minha central de integrações</Text>
                        </View>
                        <Feather name="chevron-right" size={24} className="ml-auto" />
                    </TouchableOpacity>
                </Link>
            </View>
            <View className="mt-auto gap-8">
                <View className="flex-row items-center gap-6">
                    <Feather name="info" size={24} />
                    <Text className="font-medium text-black_olive text-base">Ajuda</Text>
                    <Feather name="chevron-right" size={24} className="ml-auto" />
                </View>
                <TouchableOpacity activeOpacity={0.5} onPress={handleDesconect} className="flex-row items-center gap-6">
                    <Feather name="log-out" size={24} />
                    <Text className="font-medium text-chill_red text-base">Desconectar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}