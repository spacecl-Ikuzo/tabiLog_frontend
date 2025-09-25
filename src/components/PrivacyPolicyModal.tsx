import { Button } from './ui/button';

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PrivacyPolicyModal = ({ isOpen, onClose }: PrivacyPolicyModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* 배경 오버레이 */}
      <div className="absolute inset-0 bg-white bg-opacity-80 backdrop-blur-sm" />

      {/* 모달 콘텐츠 */}
      <div className="relative bg-white rounded-lg shadow-xl max-w-4xl max-h-[90vh] overflow-y-auto m-4">
        <div className="p-6">
          {/* 개인정보동의 제목 */}
          <div className="mb-6">
            <h1 className="text-xl font-bold text-gray-800 mb-4">個人情報同意書</h1>
            <p className="text-sm text-gray-600 mb-6">下記注意事項をご確認の上、登録手続きにお進みください。</p>
          </div>

          {/* 이메일 주의사항 */}
          <div className="mb-8">
            <ul className="space-y-3 text-sm text-gray-700">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>
                  メールアドレスに入力間違いがございますとメールが届きませんので、入力内容をよくご確認ください。
                </span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>
                  携帯電話でのメールアドレスをご登録のお客様に関して、迷惑メール対策設定やドメイン指定をされておりますと、メールが届かない場合がございます。
                </span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>
                  メール拒否/指定受信の設定をされている場合には[ tabilog.co.jp(임의)
                  ]のメールアドレスを受信頂けるように設定してください。
                </span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>
                  フリーメールアドレスをご登録のお客様に関して、迷惑メールフォルダに分類されてしまう事がございます。
                </span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>また、メールアドレスのサーバー超過により届かない場合がございます。</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>当店ではフリーメール以外のアドレスでの登録を推奨しております。</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>
                  AOLメールをお使いのお客様に関して、当店からのメールが届かないお問い合わせを多く頂いております。
                </span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>AOLメールは独自のシステムを使用されているため、メールが届かない可能性がございます。</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>
                  システムの都合上、iCloud.com関連のメールアドレス(@icloud.com、@me.comなど)でご登録をいただきますと当店からの自動送信メール(会員登録、ご注文確認)は、迷惑メールに入ってしまうことがございます。
                </span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>
                  icloud.com以外のメールアドレスでのご登録を推奨いたします。(メールが受信できない場合、発売日変更のご連絡等に影響が出る可能性がございます。)
                </span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>
                  ご登録後ご注文いただく際、マイページの「お客様情報の変更」にて、お客様情報をご登録いただく必要がございます。
                </span>
              </li>
            </ul>
          </div>

          {/* 이용약관 확인 */}
          <div className="mb-8">
            <h3 className="text-lg font-bold text-gray-800 mb-2">利用規約の確認</h3>
            <p className="text-sm text-gray-600 mb-4">下記の当店規約を、必ずご確認ください。</p>
          </div>

          {/* 데이터 보호 및 개인정보 처리방침 */}
          <div className="mb-8">
            <p className="text-sm text-gray-700 mb-3">当店では、お客様の情報はSSL(暗号化通信)によって保護されます。</p>
            <p className="text-sm text-gray-700 mb-3">
              弊社は、原則としてご提供頂きましたお客様の個人情報を、お客様のご同意を得ることなく第三者に開示することはございません。
            </p>
            <p className="text-sm text-gray-700 mb-3">
              ただし、お客様から個人情報をご提供頂く際に、予め利用目的と共に開示先をお知らせした場合、弊社グループ企業または弊社の業務を委託する企業に対し必要な範囲で開示する場合がございます。
            </p>
            <p className="text-sm text-gray-700 mb-3">
              お客様個人を特定することができない方法で開示する場合、法令等により要請される場合には、弊社の判断により適切な方法にて、第三者へ開示を行うことがございますので、予めご了承願います。
            </p>
            <p className="text-sm text-gray-700 mb-3">
              なお、上記の場合においても、お客様個人を特定可能な状態で、第三者に対してお客様の個人情報を開示するときには、当該開示先に対してお客様の個人情報の適切な保護を義務づけます。
            </p>
            <p className="text-sm text-gray-700 mb-3">
              当サイトではお客さまのプライバシーを保護するために、セコムトラストが発行するSECOM Passport for
              Webサービス証明書を使用しています。
            </p>
            <p className="text-sm text-gray-700 mb-3">
              登録いただきましたお客様の個人情報(会社名、氏名、住所、メールアドレス、電話番号など)は、商品の発送、そのアフターサービス、および弊社新商品・サービスに関する情報のお知らせに利用いたします。
            </p>
            <p className="text-sm text-gray-700 mb-3">
              登録いただきました個人情報は、サービスの内容により業務委託先に開示する場合があります。
            </p>
            <p className="text-sm text-gray-700 mb-3">
              業務委託先に対しては上記利用目的以外での情報の利用を禁止しています。
            </p>
            <p className="text-sm text-gray-700 mb-3">
              業務委託対象のサービスには、サーバやデータの管理、商品の発送があります。
            </p>
            <p className="text-sm text-gray-700">
              上記の内容および当店規約に同意いただき、お客様情報の登録を行なっていただける方は「同意して登録する」をクリックしてください。
            </p>
          </div>

          {/* 확인 버튼 */}
          <div className="flex justify-center pt-6">
            <Button
              type="button"
              className="px-8 py-3 text-white bg-brand-orange hover:bg-brand-orange"
              onClick={onClose}
            >
              確認
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyModal;
