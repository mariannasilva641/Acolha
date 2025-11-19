import React, { useState } from 'react';
import { View, Text,ScrollView, ImageBackground, TouchableOpacity, Image, TextInput, Linking, Dimensions, SafeAreaView, KeyboardAvoidingView, Platform } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import styles from "../estilo/estiloPerfis/estiloPerfilPF.js";

const projetos = [
  {
    titulo: 'Instituto Adus',
    descricao: 'Atuamos em parceria com solicitantes de refúgio, refugiados e outras pessoas em situação de deslocamento forçado.',
    imagem: require('../../IMG/adus.jpeg'),
    link: 'https://adus.org.br/',
  },
  {
    titulo: 'Cidades Invisíveis',
    descricao: 'Atua desde 2012 promovendo inclusão social, acesso ao conhecimento, tecnologia, saúde...',
    imagem: require('../../IMG/cidadesInvisiveis.webp'),
    link: 'https://cidadesinvisiveis.com.br/',
  },
];

const solicitacoes = [
  {
    tipo: 'Refúgio',
    motivo: 'Fuga de conflitos em país de origem',
    andamento: 'Em análise pelo governo',
  },
];

// NOVA LISTA DE VAGAS
const vagas = [
  {
    empresa: 'Grupo Limpo&Fácil',
    cargo: 'Auxiliar de Limpeza',
    local: 'São Paulo - SP',
    descricao: 'Empresa contratando para serviços de limpeza leve e conservação. Não precisa de experiência.',
    link: 'https://limpoefacil.com.br/vagas',
  },
  {
    empresa: 'Mercado Popular',
    cargo: 'Repositor de Mercadorias',
    local: 'Guarulhos - SP',
    descricao: 'Atuação com reposição de prateleiras e organização do estoque. Treinamento no local.',
    link: 'https://mercadopopular.com.br/carreiras',
  },
  {
    empresa: 'MegaLog Transportes',
    cargo: 'Ajudante Geral',
    local: 'Osasco - SP',
    descricao: 'Carga e descarga leves, organização e separação de produtos. Não exige escolaridade.',
    link: 'https://megalog.com.br/empregos',
  },

];

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const isTablet = SCREEN_WIDTH >= 768;

export default function PerfilPF() {
  const navigation = useNavigation();
  const route = useRoute();
  const { nome, email, cpf, telefone, nacionalidade, dataNascimento } = route.params || {};

  const [mostrarProjetos, setMostrarProjetos] = useState(false);
  const [mostrarSolicitacoes, setMostrarSolicitacoes] = useState(false);
  const [mostrarVagas, setMostrarVagas] = useState(false); // NOVO ESTADO

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ImageBackground source={require('../../IMG/FundoAcolha.png')} style={styles.background} resizeMode="cover">
          <ScrollView
            contentContainerStyle={styles.scrollContent}
            showsVerticalScrollIndicator={false}
          >
            <View style={styles.contentContainer}>
              <Text style={styles.title}>Perfil - Pessoa Física</Text>

             {/* INFORMAÇÕES PESSOAIS */}
<View style={styles.card}>
  <Text style={styles.sectionTitle}>Informações Pessoais</Text>

  {/* FOTO DE PERFIL */}
  <View style={styles.profilePhotoContainer}>
    <Image source={require('../../IMG/person.png')} style={styles.profilePhoto}/>
  </View>

  <Text style={styles.infoItem}>👤 Nome: João Silva</Text>
  <Text style={styles.infoItem}>📧 Email: joao.silva@email.com</Text>
  <Text style={styles.infoItem}>📱 Telefone: (11) 91234-5678</Text>
  <Text style={styles.infoItem}>🪪 CPF: 123.456.789-00</Text>
  <Text style={styles.infoItem}>🌎 Nacionalidade: Brasileiro</Text>
  <Text style={styles.infoItem}>🎂 Data de Nascimento: 15/03/1990</Text>

  <TouchableOpacity
    style={styles.editButton}
    onPress={() =>
      navigation.navigate('editarPerfilPF', {
        nome,
        email,
        telefone,
        cpf,
        nacionalidade,
        dataNascimento,
      })
    }
  >
    <Text style={styles.editButtonText}>✏️ Editar Perfil</Text>
  </TouchableOpacity>
</View>


              {/* PROJETOS INSCRITOS */}
              <View style={styles.card}>
                <Text style={styles.sectionTitle}>Projetos Inscritos</Text>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => setMostrarProjetos(!mostrarProjetos)}
                >
                  <Text style={styles.buttonText}>
                    {mostrarProjetos ? 'Esconder Projetos' : 'Ver Projetos'}
                  </Text>
                </TouchableOpacity>

                {mostrarProjetos &&
                  projetos.map((p, i) => (
                    <View key={i} style={styles.subCard}>
                      <Image source={p.imagem} style={styles.projectImage} />
                      <Text style={styles.projectTitle}>{p.titulo}</Text>
                      <Text>{p.descricao}</Text>
                      <TouchableOpacity onPress={() => Linking.openURL(p.link)}>
                        <Text style={styles.linkText}>Saiba Mais</Text>
                      </TouchableOpacity>
                    </View>
                  ))}
              </View>

              {/* SOLICITAÇÕES */}
              <View style={styles.card}>
                <Text style={styles.sectionTitle}>Solicitações</Text>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => setMostrarSolicitacoes(!mostrarSolicitacoes)}
                >
                  <Text style={styles.buttonText}>
                    {mostrarSolicitacoes ? 'Esconder Solicitações' : 'Ver Solicitações'}
                  </Text>
                </TouchableOpacity>

                {mostrarSolicitacoes &&
                  solicitacoes.map((s, i) => (
                    <View key={i} style={styles.subCard}>
                      <Text style={styles.projectTitle}>Tipo: {s.tipo}</Text>
                      <Text>Motivo: {s.motivo}</Text>
                      <Text>Andamento: {s.andamento}</Text>
                    </View>
                  ))}
              </View>

              {/* NOVA SEÇÃO - VAGAS DE EMPREGO */}
              <View style={styles.card}>
                <Text style={styles.sectionTitle}>Vagas de Emprego</Text>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => setMostrarVagas(!mostrarVagas)}
                >
                  <Text style={styles.buttonText}>
                    {mostrarVagas ? 'Esconder Vagas' : 'Ver Vagas Disponíveis'}
                  </Text>
                </TouchableOpacity>

                {mostrarVagas &&
                  vagas.map((v, i) => (
                    <View key={i} style={styles.subCard}>
                      <Text style={styles.projectTitle}>{v.cargo}</Text>
                      <Text>🏢 Empresa: {v.empresa}</Text>
                      <Text>📍 Local: {v.local}</Text>
                      <Text>{v.descricao}</Text>
                      <TouchableOpacity onPress={() => Linking.openURL(v.link)}>
                        <Text style={styles.linkText}>Ver Detalhes da Vaga</Text>
                      </TouchableOpacity>
                    </View>
                  ))}
              </View>

              {/* VOLTAR */}
              <TouchableOpacity
                style={styles.backButton}
                onPress={() => navigation.navigate('home')}
              >
                <Text style={styles.backButtonText}>← Voltar à Página Inicial</Text>
              </TouchableOpacity>
            </View>

            {/* FOOTER */}
            <View style={styles.footerWrapper}>
              <View style={styles.footer}>
                <Text style={styles.footerTitle}>Acolha</Text>
                <Text style={styles.footerText}>
                  Acolhendo vidas. Construindo Futuros
                </Text>

                <View style={styles.subscribe}>
                  <Text style={styles.subscribeTitle}>Sugestões</Text>
                  <Text style={styles.subscribeText}>
                    Envie aqui suas sugestões, dúvidas ou críticas.\nSua opinião é
                    muito importante para nós!
                  </Text>
                  <View style={styles.inputGroup}>
                    <TextInput placeholder="Sua Sugestão" placeholderTextColor="white" style={styles.inputSugestao} multiline numberOfLines={4} textAlignVertical="top"/>
                    <TouchableOpacity style={styles.inputButton}>
                      <Text style={styles.inputButtonText}>➤</Text>
                    </TouchableOpacity>
                  </View>
                </View>

                <View style={styles.socialContainer}>
                  <TouchableOpacity onPress={() => Linking.openURL('https://www.instagram.com/')}>
                    <Image source={require('../../IMG/instragam.png')} style={styles.socialIcon}/>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => Linking.openURL('mailto:contato@acolha.com')}>
                    <Image source={require('../../IMG/email.png')} style={styles.socialIcon}/>
                  </TouchableOpacity>
                </View>

                <Text style={styles.footerCopyright}>
                  © 2025 todos os direitos reservados.\nAcolha é uma marca
                  registrada da Civitas Tech.
                </Text>
              </View>
            </View>
          </ScrollView>
        </ImageBackground>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
