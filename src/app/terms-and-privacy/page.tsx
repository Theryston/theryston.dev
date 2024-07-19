import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export default function Page() {
  return (
    <div className="container mx-auto px-5">
      <Header />
      <div className="prose lg:prose-lg dark:prose-invert m-auto mt-20 mb-10 blog-content">
        <h2>Termos de Uso</h2>

        <h3>1. Aceitação dos Termos</h3>
        <p>
          Ao acessar e usar este site, você concorda em cumprir e estar
          vinculado aos seguintes termos e condições de uso. Se você não
          concordar com qualquer parte destes termos, não use nosso site.
        </p>

        <h3>2. Uso do Site</h3>
        <p>
          Você pode usar o conteúdo do site para fins pessoais e não comerciais,
          desde que reconheça e credite a fonte. Todo o conteúdo deste site é
          fornecido {`"`}como está{`"`} e sem garantia de qualquer tipo.
        </p>

        <h3>3. Propriedade Intelectual</h3>
        <p>
          Todo o conteúdo publicado neste site é de propriedade do autor,
          Theryston De Jesus Santos. Embora o site seja open source e permita a
          reutilização do conteúdo, é necessário fornecer os devidos créditos.
        </p>

        <h3>4. Modificações nos Termos</h3>
        <p>
          Reservamos o direito de modificar estes termos a qualquer momento. As
          mudanças serão publicadas nesta página e seu uso continuado do site
          significará sua aceitação dos termos revisados.
        </p>

        <h2>Política de Privacidade</h2>

        <h3>1. Informações que Coletamos</h3>
        <p>
          Coletamos informações pessoais identificáveis, como nome e endereço de
          e-mail, apenas quando você as fornece voluntariamente, por exemplo, ao
          se inscrever para newsletters ou enviar perguntas.
        </p>

        <h3>2. Uso das Informações</h3>
        <p>
          As informações coletadas são usadas para melhorar o conteúdo do site,
          enviar atualizações e responder a consultas. Não vendemos ou
          compartilhamos suas informações pessoais com terceiros sem o seu
          consentimento.
        </p>

        <h3>3. Cookies</h3>
        <p>
          Utilizamos cookies para melhorar a experiência do usuário. Os cookies
          são pequenos arquivos de dados armazenados no seu navegador que nos
          ajudam a entender como os visitantes interagem com o site. Você pode
          desativar os cookies através das configurações do seu navegador, mas
          isso pode afetar a funcionalidade do site.
        </p>

        <h3>4. Segurança das Informações</h3>
        <p>
          Empregamos medidas de segurança para proteger suas informações
          pessoais. No entanto, não podemos garantir a segurança absoluta dos
          dados transmitidos pela internet.
        </p>

        <h2>Conteúdo Open Source</h2>
        <p>
          Todo o código-fonte deste site está disponível no GitHub e pode ser
          reutilizado de acordo com a licença especificada. Incentivamos a
          colaboração e a contribuição da comunidade.
        </p>

        <h2>Ganhos com Publicidade</h2>
        <p>
          Este site utiliza anúncios do Google AdSense para gerar receita. Ao
          utilizar nosso site, você concorda com o uso de cookies de publicidade
          do Google para exibir anúncios personalizados. Para mais informações
          sobre como o Google usa seus dados, consulte a{" "}
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Política de Privacidade do Google
          </a>
          .
        </p>

        <h2>Isenção de Responsabilidade</h2>
        <p>
          O conteúdo deste site é fornecido {`"`}como está{`"`} e sem garantias
          de qualquer tipo, expressas ou implícitas. Não garantimos a precisão,
          integridade ou utilidade das informações fornecidas. Não nos
          responsabilizamos por quaisquer danos resultantes do uso ou da
          incapacidade de usar o site.
        </p>

        <h2>Contato</h2>
        <p>
          Se você tiver alguma dúvida sobre estes Termos de Uso, Política de
          Privacidade ou qualquer outro aspecto do site, entre em contato
          conosco em{" "}
          <a href="mailto:devtheryston@gmail.com">devtheryston@gmail.com</a>.
        </p>
      </div>
      <Footer />
    </div>
  );
}
