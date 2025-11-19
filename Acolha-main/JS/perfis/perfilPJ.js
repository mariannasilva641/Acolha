import React, { useState, useEffect } from "react";
import {View,Text,ScrollView,TouchableOpacity,Linking,TextInput,Image,SafeAreaView,} from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import styles from "../estilo/estiloPerfis/estiloPerfilPJ.js";

export default function PerfilPJ() {
  const route = useRoute();
  const navigation = useNavigation();

  const {
    nome = "Itaú Unibanco",
    email = "contato@itau.com.br",
    senha = "123456",
    cnpj = "60.701.190/0001-04",
    telefone = "0800 728 0728",
    nomeRepresentante = "Milton Maluhy Filho",
    cargo = "CEO",
    areaAtuacao = "Serviços Financeiros e Bancários",
    mensagem = "Feito com você — trabalhando para transformar possibilidades em realizações.",
    vagas: vagasRecebidas = [],
    novaVaga,
  } = route.params || {};

  const [vagas, setVagas] = useState(vagasRecebidas);
  const [indexVaga, setIndexVaga] = useState(0);

  // Adiciona a nova vaga se houver
  useEffect(() => {
    if (novaVaga) {
      setVagas((prev) => [...prev, novaVaga]);
      setIndexVaga(vagas.length); // vai para a nova vaga
    }
  }, [novaVaga]);

  const irParaVagaAnterior = () => {
    setIndexVaga((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const irParaProximaVaga = () => {
    setIndexVaga((prev) => (prev < vagas.length - 1 ? prev + 1 : prev));
  };

  const vagaAtual = vagas[indexVaga];

  const projetosApoiados = [
    {
      id: 1,
      nome: "Projeto Educação",
      descricao: "Apoio a escolas comunitárias.",
      link: "https://www.unicef.org/brazil/educacao",
    },
    {
      id: 2,
      nome: "Projeto Meio Ambiente",
      descricao: "Campanhas de reciclagem e preservação.",
      link: "https://www.wwf.org.br/",
    },
    {
      id: 3,
      nome: "Projeto Saúde",
      descricao: "Clínicas gratuitas para comunidades carentes.",
      link: "https://www.msf.org.br/",
    },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.titulo}>Perfil - Pessoa Jurídica</Text>

        {/* INFORMAÇÕES DA EMPRESA */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Informações da Empresa</Text>

          <Text style={styles.label}>Nome:</Text>
          <Text style={styles.valor}>{nome}</Text>

          <Text style={styles.label}>Email:</Text>
          <Text style={styles.valor}>{email}</Text>

          <Text style={styles.label}>Senha:</Text>
          <Text style={styles.valor}>{"*".repeat(senha.length)}</Text>

          <Text style={styles.label}>CNPJ:</Text>
          <Text style={styles.valor}>{cnpj}</Text>

          <Text style={styles.label}>Telefone:</Text>
          <Text style={styles.valor}>{telefone}</Text>

          <Text style={styles.sectionTitle}>Representante</Text>

          <Text style={styles.label}>Nome do Representante:</Text>
          <Text style={styles.valor}>{nomeRepresentante}</Text>

          <Text style={styles.label}>Cargo:</Text>
          <Text style={styles.valor}>{cargo}</Text>

          <Text style={styles.label}>Área de Atuação:</Text>
          <Text style={styles.valor}>{areaAtuacao}</Text>

          <Text style={styles.label}>Mensagem:</Text>
          <Text style={styles.valor}>{mensagem}</Text>

          <TouchableOpacity
            style={styles.botaoEditar}
            onPress={() =>
              navigation.navigate("editarPerfilPJ", {
                nome,
                email,
                senha,
                cnpj,
                telefone,
                nomeRepresentante,
                cargo,
                areaAtuacao,
                mensagem,
                vagas,
              })
            }
          >
            <Text style={styles.botaoTexto}>Editar Dados</Text>
          </TouchableOpacity>
        </View>

        {/* PROJETOS APOIADOS */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Projetos que a empresa apoia</Text>

          {projetosApoiados.map((projeto) => (
            <TouchableOpacity
              key={projeto.id}
              style={styles.projetoCard}
              onPress={() => Linking.openURL(projeto.link)}
            >
              <Text style={styles.projetoNome}>{projeto.nome}</Text>
              <Text style={styles.projetoDescricao}>{projeto.descricao}</Text>
              <Text style={styles.projetoLink}>Acessar projeto →</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* VAGAS DE EMPREGO */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Cadastro de Vagas de Emprego</Text>

          <TouchableOpacity
            style={styles.botaoCadastrarVaga}
            onPress={() =>
              navigation.navigate("CadastrarVagas", { empresa: nome, vagas })
            }
          >
            <Text style={styles.botaoTexto}>Cadastrar nova vaga</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.botaoCadastrarVaga}
            onPress={() =>
              navigation.navigate("CurriculosRecebidos", { empresa: nome })
            }
          >
            <Text style={styles.botaoTexto}>Ver currículos recebidos</Text>
          </TouchableOpacity>

          {vagas.length > 0 ? (
            <View style={styles.vagaCard}>
              <Text style={styles.vagaTitulo}>{vagaAtual.titulo}</Text>
              <Text style={styles.vagaDescricao}>{vagaAtual.descricao}</Text>
              <Text style={styles.vagaRequisitos}>
                Requisitos: {vagaAtual.requisitos}
              </Text>
              {vagaAtual.salario && (
                <Text style={styles.vagaSalario}>Salário: {vagaAtual.salario}</Text>
              )}
              {vagaAtual.link && (
                <TouchableOpacity onPress={() => Linking.openURL(vagaAtual.link)}>
                  <Text style={styles.vagaLink}>Acessar vaga →</Text>
                </TouchableOpacity>
              )}

              {/* Navegação entre vagas */}
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginTop: 15,
                }}
              >
                <TouchableOpacity
                  onPress={irParaVagaAnterior}
                  disabled={indexVaga === 0}
                >
                  <Text style={{ color: indexVaga === 0 ? "#ccc" : "#1a73e8" }}>
                    ← Anterior
                  </Text>
                </TouchableOpacity>

                <Text>
                  {indexVaga + 1} / {vagas.length}
                </Text>

                <TouchableOpacity
                  onPress={irParaProximaVaga}
                  disabled={indexVaga === vagas.length - 1}
                >
                  <Text
                    style={{
                      color:
                        indexVaga === vagas.length - 1 ? "#ccc" : "#1a73e8",
                    }}
                  >
                    Próxima →
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          ) : (
            <Text style={styles.vagaNenhuma}>Nenhuma vaga cadastrada ainda.</Text>
          )}
        </View>

        {/* BOTÃO VOLTAR */}
        <TouchableOpacity
          style={styles.botaoVoltar}
          onPress={() => navigation.navigate("home")}
        >
          <Text style={styles.textoVoltar}>← Voltar à Página Inicial</Text>
        </TouchableOpacity>

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
                Envie aqui suas sugestões, dúvidas ou críticas.{"\n"}Sua
                opinião é muito importante para nós!
              </Text>

              <View style={styles.inputGroup}>
                <TextInput
                  placeholder="Sua Sugestão"
                  placeholderTextColor="white"
                  style={styles.inputSugestao}
                  multiline
                  numberOfLines={4}
                  textAlignVertical="top"
                />
                <TouchableOpacity style={styles.inputButton}>
                  <Text style={styles.inputButtonText}>➤</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.socialContainer}>
              <TouchableOpacity
                onPress={() => Linking.openURL("https://www.instagram.com/")}
              >
                <Image source={require("../../IMG/instragam.png")} style={styles.socialIcon}/>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => Linking.openURL("mailto:contato@acolha.com")}
              >
                <Image source={require("../../IMG/email.png")} style={styles.socialIcon}/>
              </TouchableOpacity>
            </View>

            <Text style={styles.footerCopyright}>
              © 2025 todos os direitos reservados.{"\n"}Acolha é uma marca
              registrada da Civitas Tech.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
