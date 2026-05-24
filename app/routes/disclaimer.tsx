import type { LoaderFunctionArgs, MetaFunction } from "react-router";
import { Link, useLoaderData } from "react-router";
import LegalPage from "../components/LegalPage";
import { readLangCookie, type Lang } from "../lib/lang-cookie";

export const meta: MetaFunction = () => [
  { title: "Disclaimer — Ruma" },
  { name: "description", content: "Ruma calculator outputs are informational only. Not financial, investment, tax, or legal advice." },
  { name: "robots", content: "index, follow" },
];

export const loader = ({ request }: LoaderFunctionArgs) => {
  return { initialLang: readLangCookie(request) };
};

const EnglishContent = () => (
  <>
    <h2>1. Not financial, investment, tax, or legal advice</h2>
    <p>
      Ruma (ruma.casa), operated by AJILE STUDIO (Company Registration No. 202503327530), provides property investment calculators and analytical tools for <strong>informational and educational purposes only</strong>.
    </p>
    <p>
      Nothing on the Service — including calculator outputs, exported reports, articles, or any other content — constitutes financial, investment, tax, legal, or professional advice, nor a recommendation to buy, sell, finance, or transact in any property, security, or financial product. AJILE STUDIO is <strong>not</strong> a licensed financial adviser, valuer, real estate negotiator, or tax agent under Malaysian law, and the Service is not regulated by the Securities Commission Malaysia, Bank Negara Malaysia, or the Board of Valuers, Appraisers, Estate Agents and Property Managers.
    </p>
    <p>
      Before making any property, financing, or investment decision, you should consult appropriately licensed professionals (e.g. a licensed real estate negotiator, valuer, banker, tax agent, or lawyer) who can take your individual circumstances into account.
    </p>

    <h2>2. Accuracy of information</h2>
    <p>
      Calculator results are estimates based on the inputs you provide and on assumptions, formulae, default rates, and statutory figures (e.g. stamp duty schedules) that may change without notice and may not reflect the latest position under Malaysian law.
    </p>
    <p>
      While we take reasonable care, we make <strong>no representation or warranty</strong> as to the accuracy, completeness, timeliness, or reliability of any information, calculation, or output produced by the Service. Actual outcomes — including loan eligibility, interest, fees, taxes, rental yield, and capital growth — may differ materially from any estimate produced by the Service.
    </p>

    <h2>3. Limitation of liability</h2>
    <p>
      To the maximum extent permitted under Malaysian law, AJILE STUDIO, its directors, employees, and affiliates shall <strong>not be liable</strong> for any direct, indirect, incidental, special, consequential, or exemplary loss or damage (including loss of profit, savings, opportunity, or data) arising out of, or in any way connected with, your use of, or reliance on, the Service or any content produced by it.
    </p>
    <p>
      You assume <strong>full responsibility</strong> for any decision made, or action taken, based on the Service.
    </p>

    <h2>4. Third-party content</h2>
    <p>
      The Service may reference or link to third-party data, websites, or services. AJILE STUDIO does not endorse and is not responsible for any third-party content.
    </p>

    <h2>5. Governing law</h2>
    <p>
      This Disclaimer is governed by the laws of Malaysia and is to be read together with our <Link to="/terms">Terms of Service</Link> and <Link to="/privacy">Privacy Policy</Link>.
    </p>

    <h2>6. Contact</h2>
    <p>
      AJILE STUDIO (202503327530)<br />
      Email: <a href="mailto:inbox@ajile.team">inbox@ajile.team</a>
    </p>
  </>
);

const BahasaContent = () => (
  <>
    <p style={{ fontStyle: "italic", fontSize: "0.88rem", color: "var(--ink-3)", marginBottom: "2rem" }}>
      Nota: Versi Bahasa Inggeris dokumen ini adalah versi rasmi yang mengawal. Terjemahan Bahasa Malaysia ini disediakan untuk kemudahan rujukan; sekiranya terdapat sebarang percanggahan, versi Bahasa Inggeris akan terpakai.
    </p>

    <h2>1. Bukan nasihat kewangan, pelaburan, cukai, atau undang-undang</h2>
    <p>
      Ruma (ruma.casa), yang dikendalikan oleh AJILE STUDIO (No. Pendaftaran Syarikat 202503327530), menyediakan kalkulator pelaburan hartanah dan alat analitik untuk <strong>tujuan maklumat dan pendidikan sahaja</strong>.
    </p>
    <p>
      Tiada apa-apa pun pada Perkhidmatan — termasuk output kalkulator, laporan yang dieksport, artikel, atau apa-apa kandungan lain — yang merupakan nasihat kewangan, pelaburan, cukai, undang-undang, atau profesional, mahupun saranan untuk membeli, menjual, membiayai, atau bertransaksi dalam mana-mana hartanah, sekuriti, atau produk kewangan. AJILE STUDIO <strong>bukan</strong> penasihat kewangan berlesen, penilai, perunding hartanah berdaftar, atau ejen cukai di bawah undang-undang Malaysia, dan Perkhidmatan ini tidak dikawal selia oleh Suruhanjaya Sekuriti Malaysia, Bank Negara Malaysia, atau Lembaga Penilai, Pentaksir, Ejen Harta Tanah dan Pengurus Harta.
    </p>
    <p>
      Sebelum membuat sebarang keputusan hartanah, pembiayaan, atau pelaburan, anda hendaklah berunding dengan profesional berlesen yang sesuai (cth. perunding hartanah berdaftar, penilai, pengamal bank, ejen cukai, atau peguam) yang boleh mengambil kira keadaan individu anda.
    </p>

    <h2>2. Ketepatan maklumat</h2>
    <p>
      Keputusan kalkulator adalah anggaran berdasarkan input yang anda berikan dan berdasarkan andaian, formula, kadar lalai, dan angka statutori (cth. jadual duti setem) yang mungkin berubah tanpa notis dan mungkin tidak mencerminkan kedudukan terkini di bawah undang-undang Malaysia.
    </p>
    <p>
      Walaupun kami mengambil langkah berjaga-jaga yang munasabah, kami <strong>tidak membuat representasi atau jaminan</strong> mengenai ketepatan, kelengkapan, ketepatan masa, atau kebolehpercayaan mana-mana maklumat, pengiraan, atau output yang dihasilkan oleh Perkhidmatan. Hasil sebenar — termasuk kelayakan pinjaman, faedah, yuran, cukai, hasil sewaan, dan pertumbuhan modal — mungkin berbeza secara material daripada sebarang anggaran yang dihasilkan oleh Perkhidmatan.
    </p>

    <h2>3. Had liabiliti</h2>
    <p>
      Setakat maksimum yang dibenarkan di bawah undang-undang Malaysia, AJILE STUDIO, pengarah, pekerja, dan sekutunya <strong>tidak akan menanggung liabiliti</strong> bagi sebarang kerugian atau ganti rugi langsung, tidak langsung, sampingan, khas, berbangkit, atau teladan (termasuk kehilangan keuntungan, simpanan, peluang, atau data) yang timbul daripada, atau dalam apa cara berkaitan dengan, penggunaan anda terhadap, atau kebergantungan anda kepada, Perkhidmatan atau sebarang kandungan yang dihasilkan olehnya.
    </p>
    <p>
      Anda menanggung <strong>tanggungjawab sepenuhnya</strong> bagi sebarang keputusan yang dibuat, atau tindakan yang diambil, berdasarkan Perkhidmatan.
    </p>

    <h2>4. Kandungan pihak ketiga</h2>
    <p>
      Perkhidmatan ini mungkin merujuk atau memautkan kepada data, laman web, atau perkhidmatan pihak ketiga. AJILE STUDIO tidak mengesahkan dan tidak bertanggungjawab terhadap sebarang kandungan pihak ketiga.
    </p>

    <h2>5. Undang-undang yang mengawal</h2>
    <p>
      Penafian ini dikawal oleh undang-undang Malaysia dan hendaklah dibaca bersama <Link to="/terms">Terma Perkhidmatan</Link> dan <Link to="/privacy">Dasar Privasi</Link> kami.
    </p>

    <h2>6. Hubungi</h2>
    <p>
      AJILE STUDIO (202503327530)<br />
      E-mel: <a href="mailto:inbox@ajile.team">inbox@ajile.team</a>
    </p>
  </>
);

export default function Disclaimer() {
  const { initialLang } = useLoaderData() as { initialLang: Lang };
  return (
    <LegalPage
      initialLang={initialLang}
      title={{ en: "Disclaimer", bm: "Penafian" }}
      lastUpdated="24 May 2026"
      content={{ en: <EnglishContent />, bm: <BahasaContent /> }}
    />
  );
}
