import React from "react";
import { CButton, CRow, CCol, CLink } from "@coreui/react";
import "./Terms.scss";

export default function () {
  //   const [haveRead, setHaveRead] = useState(false);
  this.handleEnterTerms();

  const contents = [
    {
      subtitle: {
        numbering: "1.",
        en: "PROVISION OF THE SERVICE",
        vi: "CUNG CẤP DỊCH VỤ",
      },
      descriptions: [
        {
          numbering: "1.1.",
          en: `Savills will provide the Customer with the services as
        agreed in the Appointment (<strong>“Services”</strong>) on
        the basis of the Appointment and these Terms and Conditions
        on a reasonable endeavours basis (meaning with reasonable
        skill and care).`,
          vi: `Savills sẽ cung cấp cho Khách Hàng các dịch vụ như đã được
        đồng ý tại Thỏa Thuận (<strong>“Dịch Vụ”</strong>) trên cơ
        sở Thỏa Thuận và các Điều Khoản và Điều Kiện này với nỗ lực
        hợp lý (nghĩa là với kỹ năng và sự quan tâm hợp lý).`,
        },
        {
          numbering: "1.2.",
          en: `It is technically impracticable to provide a fault free Service (including instances where Services are not continuously available, or the quality is affected for reasons such as upgrading, maintenance, weather or other networks involvement) and Savills does not undertake to do so nor warrant or represent that it can or will. Savills will however attempt to repair any reported faults in accordance with the details in the Management Agreement. As such Savills accept no responsibility or liability for any damage caused by use or reliance on the services provided.`,
          vi: `Việc cung cấp một Dịch Vụ không có lỗi là không khả thi trên thực tế (bao gồm cả các trường hợp Dịch Vụ không liên tục hoặc chất lượng bị ảnh hưởng vì các lý do như nâng cấp, bảo trì, thời tiết hoặc các liên kết khác có liên quan) và Savills không cam kết thực hiện được như vậy, cũng như không đảm bảo hoặc tuyên bố rằng có thể hoặc sẽ được như vậy. Tuy nhiên, Savills sẽ cố gắng sửa chữa mọi lỗi được báo cáo theo các quy định trong Hợp Đồng Quản Lý. Vì vậy, Savills không chịu trách nhiệm hoặc nghĩa vụ đối với bất kỳ thiệt hại nào do việc sử dụng hoặc tín nhiệm vào các dịch vụ được cung cấp.`,
        },
        {
          numbering: "1.3.",
          en: `Occasionally Savills may for operational reasons:`,
          vi: `Vì các lý do hoạt động, Savills có thể: `,
        },
        {
          numbering: "1.3.1.",
          en: `change the technical specification of the Services and/or the codes or numbers used by Savills for the provision of the Services, provided that any change to the technical specification does not materially and adversely affect the performance of the Services;`,
          vi: `thay đổi thông số kỹ thuật của Dịch Vụ và/hoặc mã hoặc số được Savills sử dụng để cung cấp Dịch Vụ, miễn là mọi thay đổi đối với thông số kỹ thuật không ảnh hưởng nghiêm trọng và bất lợi đến hiệu suất của Dịch Vụ;`,
        },
        {
          numbering: "1.3.2.",
          en: `suspend the Services for repair, maintenance or improvement of the Services or because of an emergency, but before doing so will give as much notice as reasonably possible and whenever reasonably practicable will agree with you when the Services will be suspended. Savills will restore the Services as soon as it reasonably can after suspension.`,
          vi: `tạm ngừng Dịch Vụ để sửa chữa, bảo trì hoặc cải thiện Dịch vụ hoặc vì trường hợp khẩn cấp, nhưng trước khi thực hiện sẽ phải thông báo và bất cứ khi nào có thể thực hiện được sẽ thỏa thuận với bạn khi nào Dịch Vụ sẽ bị tạm ngừng. Savills sẽ khôi phục Dịch Vụ ngay khi có thể sau khi bị tạm ngừng.`,
        },
        {
          numbering: "1.4.",
          en: `You may also be able to upload and send your own content using the Services. You acknowledge and accept that Savills have a royalty free, perpetual and worldwide licence to store, transmit or otherwise deal with any content you upload on the Services. The services are provided to you on an ‘as is’ basis and Savills makes no representations as to the Services or their content.`,
          vi: `Bạn cũng có thể tải lên và gửi nội dung của riêng mình bằng Dịch Vụ. Bạn hiểu và chấp nhận rằng Savills có bản quyền miễn phí, giấy phép vĩnh viễn và trên toàn thế giới để lưu trữ, truyền tải hoặc xử lý bất kỳ nội dung nào bạn tải lên trên Dịch Vụ. Các dịch vụ được cung cấp cho bạn trên cơ sở “nguyên trạng” và Savills không đưa ra bất kỳ cam kết nào như vậy đối với Dịch Vụ hoặc nội dung của Dịch Vụ.`,
        },
        {
          numbering: "1.5.",
          en: `Savills are not providing you with financial, accounting, taxation or commercial advice of any kind. Savills do not make invitations or offer inducements to enter into any investment agreements.`,
          vi: `Savills không cung cấp cho bạn lời khuyên tài chính, kế toán, thuế hoặc thương mại dưới bất kỳ hình thức nào. Savills không đưa ra lời mời hoặc đề nghị tham gia vào bất kỳ thỏa thuận đầu tư nào.`,
        },
        {
          numbering: "1.6.",
          en: `Savills will not be liable:`,
          vi: `Savills sẽ không chịu trách nhiệm:`,
        },
        {
          numbering: "1.6.1.",
          en: `for any loss you may incur as a result of someone using your PINs or passwords, with, or without, your knowledge; or`,
          vi: `cho bất kỳ mất mát nào bạn có thể phải chịu do ai đó sử dụng mã PIN hoặc mật khẩu của bạn, có hoặc không có sự nhận biết của bạn; hoặc`,
        },
        {
          numbering: "1.6.2.",
          en: `if they cannot carry out their duties, or provide Services, because of something beyond their control.`,
          vi: `nếu không thể thực hiện nhiệm vụ của mình, hoặc cung cấp Dịch Vụ, vì các lý do vượt quá tầm kiểm soát của mình.`,
        },
        {
          numbering: "1.7.",
          en: `Savills accepts no liability for the failure of services or equipment to conform to any description or specification set out on any document. It is entirely your responsibility to ensure that the equipment ordered by it is suitable for its purpose.`,
          vi: `Savills không chịu trách nhiệm cho việc các dịch vụ hoặc thiết bị không tuân thủ bất kỳ mô tả hoặc thông số kỹ thuật nào được nêu trong bất kỳ tài liệu nào. Bạn hoàn toàn có trách nhiệm đảm bảo rằng thiết bị được đặt hàng phù hợp với mục đích của nó.`,
        },
      ],
    },

    {
      subtitle: {
        numbering: "2.",
        en: "SECURITY",
        vi: "BẢO MẬT",
      },
      descriptions: [
        {
          numbering: "2.1.",
          en: `You must keep all PINs and passwords secure and confidential.`,
          vi: `Bạn phải lưu tất cả mã PIN và mật khẩu an toàn và bảo mật.`,
        },
        {
          numbering: "2.2.",
          en: `You should immediately change your PIN or password if you become aware that a third party or otherwise is accessing or trying to access Services on your account without your permission.`,
          vi: `Bạn nên thay đổi ngay lập tức mã PIN hoặc mật khẩu nếu bạn biết rằng một bên thứ ba hoặc người khác đang truy cập hoặc cố gắng truy cập Dịch Vụ trên tài khoản của bạn mà không có sự cho phép của bạn.`,
        },
      ],
    },

    {
      subtitle: {
        numbering: "3.",
        en: "RESPONSIBLE USE OF THE SERVICE",
        vi: "TRÁCH NHIỆM SỬ DỤNG DỊCH VỤ",
      },
      descriptions: [
        {
          numbering: "3.1.",
          en: `You agree  undertake:`,
          vi: `Bạn đồng ý và cam kết:`,
        },
        {
          numbering: "3.1.1.",
          en: `to only access the Services as permitted by Savills and not attempt at any time to circumvent any system security.`,
          vi: `chỉ truy cập Dịch Vụ khi được Savills cho phép và không cố gắng, tại bất kỳ thời điểm nào, né tránh bất kỳ biện pháp bảo mật hệ thống nào.`,
        },
        {
          numbering: "3.1.2.",
          en: `to use the Service(s) as laid out in and pursuant to the Appointment. You must not resell or commercially exploit (such as assign, sub-licence or delegate) any of the Services, content or equipment.`,
          vi: `sử dụng (các) Dịch Vụ như được nêu trong và theo Thỏa Thuận. Bạn không được bán lại hoặc khai thác thương mại (như chuyển nhượng, cấp giấy phép con hoặc ủy thác) bất kỳ phần nào của Dịch Vụ, nội dung hoặc thiết bị.`,
        },
        {
          numbering: "3.1.3.",
          en: `to comply at all times with all consumer and other legislation, instructions or guidelines issued by regulatory authorities, relevant licences and any other codes of practice which apply to you or Savills.`,
          vi: `tuân thủ mọi lúc với tất cả các quy định pháp luật về người tiêu dùng và các quy định, chỉ thị hoặc hướng dẫn khác được ban hành bởi các cơ quan quản lý, các giấy phép có liên quan và bất kỳ quy tắc thực hành nào khác áp dụng cho bạn hoặc Savills.`,
        },
        {
          numbering: "3.2.",
          en: `That the Services must not be used in any unlawful way; or does not comply with any instructions given by Savills under the Appointment.`,
          vi: `Rằng Dịch Vụ không được sử dụng theo bất kỳ cách bất hợp pháp nào; hoặc không tuân thủ bất kỳ hướng dẫn nào được đưa ra bởi Savills theo Thỏa Thuận.`,
        },
        {
          numbering: "3.3.",
          en: `The Services must not be used to send, receive, upload, download, use or re-use any information or material which is offensive, abusive, indecent, defamatory, obscene or menacing, or in breach of confidence, copyright, privacy or any other rights (including third parties) or to cause annoyance, inconvenience or needless anxiety or to send or provide unsolicited advertising or promotional material or other than in accordance with the acceptable use policies of any connected networks.`,
          vi: `Dịch Vụ không được sử dụng để gửi, nhận, tải lên, tải xuống, sử dụng hoặc tái sử dụng bất kỳ thông tin hoặc tài liệu nào xúc phạm, lạm dụng, không đứng đắn, bôi nhọ, tục tĩu hoặc đe dọa, hoặc vi phạm sự bảo mật, bản quyền, quyền riêng tư hoặc bất kỳ quyền nào khác (bao gồm cả bên thứ ba) hoặc gây phiền toái, bất tiện hoặc lo lắng không cần thiết hoặc gửi hoặc cung cấp tài liệu khuyến mãi hoặc quảng cáo không được yêu cầu hoặc ngoài các chính sách sử dụng được chấp thuận của bất kỳ mạng lưới kết nối nào.`,
        },
        {
          numbering: "3.4.",
          en: `If you or anyone else, with or without your knowledge or approval, uses the Service in contravention of this clause; or the network capacity of the Service which, in Savills opinion, is, or is likely to be, detrimental to the provision of the Service to you or any other customer and fails to take corrective action within a reasonable period of receiving notice from Savills, Savills may treat the contravention as a material breach of the Appointment.`,
          vi: `Nếu bạn hoặc bất kỳ ai khác, có hoặc không có sự nhận biết hoặc chấp thuận của bạn, sử dụng Dịch Vụ trái với điều khoản này; hoặc khả năng kết nối của Dịch Vụ, mà theo quan điểm của Savills, là hoặc có khả năng gây bất lợi cho việc cung cấp Dịch Vụ cho bạn hoặc bất kỳ khách hàng nào khác và không thực hiện hành động khắc phục trong khoảng thời gian hợp lý theo thông báo từ Savills, Savills sẽ coi sự vi phạm này là vi phạm cơ bản của Thỏa Thuận.`,
        },
        {
          numbering: "3.5.",
          en: `You must indemnify Savills against any claims or legal proceedings which are brought or threatened against Savills by a third party because:`,
          vi: `Bạn phải bồi thường cho Savills khỏi mọi khiếu nại hoặc thủ tục pháp lý được đưa ra hoặc đe dọa đối với Savills bởi bên thứ ba vì:`,
        },
        {
          numbering: "3.5.1.",
          en: `The Services are not used in accordance with the Appointment and/or these Terms & Conditions due to your acts or omissions; or`,
          vi: `Dịch Vụ không được sử dụng theo Thỏa Thuận và/hoặc các Điều Khoản & Điều Kiện này do hành vi hoặc thiếu sót của bạn; hoặc`,
        },
        {
          numbering: "3.5.2.",
          en: `The Service is faulty or cannot be used by that third party due to your acts or omissions.`,
          vi: `Dịch Vụ bị lỗi hoặc không thể được sử dụng bởi bên thứ ba đó do hành vi hoặc thiếu sót của bạn.`,
        },
        {
          numbering: "3.6.",
          en: `You must always co-operate with Savills and follow Savills reasonable instructions to ensure the proper use and security of the Services and your account.`,
          vi: `Bạn phải luôn hợp tác với Savills và làm theo hướng dẫn hợp lý của Savills để đảm bảo việc sử dụng và bảo mật đúng cách cho Dịch Vụ và tài khoản của bạn.`,
        },
        {
          numbering: "3.7.",
          en: `Savills reserve the right to publish an acceptable use policy and you agree to adhere to such policy, which provides more detail about the rules for use of certain Services in order to ensure that use of Services is to combat fraud and where Services that may be introduced require certain rules to ensure they can be enjoyed by their customers.`,
          vi: `Savills bảo lưu quyền công bố chính sách sử dụng và bạn đồng ý tuân thủ chính sách đó, quy định chi tiết hơn về các quy tắc sử dụng một số Dịch Vụ để đảm bảo rằng việc sử dụng Dịch Vụ là để chống gian lận và khi Dịch vụ được giới thiệu yêu cầu một số quy tắc nhất định để đảm bảo khách hàng của họ có thể được hưởng.`,
        },
        {
          numbering: "3.8.",
          en: `If you use Services from a country outside Vietnam, your use of the Services may be subject to laws and regulations that apply in that other country. Savills is not liable for your failure to comply with those laws or regulations.`,
          vi: `Nếu bạn sử dụng Dịch Vụ từ một quốc gia bên ngoài Việt Nam, việc sử dụng Dịch Vụ của bạn có thể phải tuân theo luật pháp và quy định áp dụng tại quốc gia đó. Savills không chịu trách nhiệm cho việc bạn không tuân thủ các luật hoặc quy định đó.`,
        },
      ],
    },

    {
      subtitle: {
        numbering: "4.",
        en: "YOUR RESPONSIBILITIES",
        vi: "TRÁCH NHIỆM CỦA BẠN",
      },
      descriptions: [
        {
          numbering: "4.1.",
          en: `With the exception of any equipment belonging to Savills, you are responsible for the provision and  of all other equipment used in conjunction with the Services.`,
          vi: `Ngoại trừ các thiết bị thuộc Savills, bạn chịu trách nhiệm cung cấp và duy trì tất cả các thiết bị khác được sử dụng cùng với Dịch Vụ.`,
        },
        {
          numbering: "4.2.",
          en: `You are  for ensuring that your equipment connected to the Services conform to the interface specifications specified by Savills.`,
          vi: `Bạn phải đảm bảo rằng thiết bị của bạn được kết nối với Dịch Vụ phù hợp với thông số kỹ thuật giao diện được chỉ định bởi Savills.`,
        },
        {
          numbering: "4.3.",
          en: `The Appointment for the provision of Services is between Savills and the Customer. Where the Customer, utilising the Service, enters into contracts with any third parties, Savills will have no responsibility to those third parties. In the event that the Customer utilises any Service to provide a service to third parties, the Customer will include in its contracts conditions of use equivalent to those in these Terms & Conditions and/or the Appointment, as well as any additional terms and conditions specifically for different services.`,
          vi: `Thỏa Thuận cho việc cung cấp Dịch vụ là giữa Savills và Khách Hàng. Khi Khách Hàng, sử dụng Dịch Vụ, ký kết hợp đồng với bất kỳ bên thứ ba nào, Savills sẽ không có trách nhiệm với các bên thứ ba đó. Trong trường hợp Khách Hàng sử dụng bất kỳ Dịch Vụ nào để cung cấp dịch vụ cho bên thứ ba, Khách Hàng sẽ phải đưa vào các hợp đồng của mình các điều kiện sử dụng tương đương với các Điều Khoản & Điều Kiện và/hoặc Thỏa Thuận này, cũng như mọi điều khoản và điều kiện bổ sung cụ thể cho các dịch vụ khác nhau.`,
        },
        {
          numbering: "4.4.",
          en: `You shall be responsible for ensuring the compatibility of any applications you wish to use with the Services.`,
          vi: `Bạn phải chịu trách nhiệm đảm bảo tính tương thích của bất kỳ ứng dụng nào bạn muốn sử dụng với Dịch Vụ.`,
        },
        {
          numbering: "4.5.",
          en: `You shall indemnify Savills against all liabilities, claims, damages, losses and expenses arising from your use of the Services in breach of the Appointment.`,
          vi: `Bạn phải bồi thường cho Savills khỏi mọi nghĩa vụ, khiếu nại, thiệt hại, tổn thất và chi phí phát sinh từ việc bạn sử dụng Dịch Vụ vi phạm Thỏa Thuận.`,
        },
      ],
    },

    {
      subtitle: {
        numbering: "5.",
        en: "USE OF INFORMATION AND MATERIALS",
        vi: "SỬ DỤNG THÔNG TIN VÀ TÀI LIỆU",
      },
      descriptions: [
        {
          numbering: "5.1.",
          en: `The information and materials contained in these pages - and the terms, conditions, and descriptions that appear – are the property of Savills and are subject to change from time to time. Not all products and services are available in all geographic areas. Your eligibility for particular products and services is subject to Savills’s final determination and acceptance.`,
          vi: `Các thông tin và tài liệu có trong những trang này - và các điều kiện, điều khoản và các mô tả xuất hiện trong đó - là tài sản của Savills và có thể được thay đổi tùy từng thời điểm. Không phải tất cả các sản phẩm và dịch vụ đều hiện diện ở tất cả các khu vực địa lý. Sự phù hợp của bạn đối với các sản phẩm và dịch vụ cụ thể sẽ phụ thuộc vào quyết định và chấp thuận cuối cùng của Savills.`,
        },
        {
          numbering: "5.2.",
          en: `You may not re-produce, post, transmit, upload, republish or distribute in any way any material from this System without the prior written approval of Savills. Images and graphics on this System may be protected by copyright and may not be reproduced or appropriated in any manner without the prior written approval of their relevant owners. Modification of any of the materials or use of the materials for any other purpose will be a violation of Savills’s copyright and other intellectual property rights and the copyright and intellectual property rights of the respective owners.`,
          vi: `Bạn không được sao chép, đăng, chuyển, tải lên, tái xuất bản hoặc phân phối dưới bất kỳ hình thức nào đối với bất kỳ tài liệu nào từ Hệ Thống này mà không có sự chấp thuận trước bằng văn bản của Savills. Các hình ảnh và đồ họa trên Hệ Thống này có thể được bảo vệ bởi quyền tác giả và không được sao chép hoặc sử dụng dưới bất kỳ hình thức nào mà không có sự chấp thuận trước bằng văn bản của các chủ sở hữu liên quan. Việc sửa đổi bất kỳ tài liệu hoặc sử dụng tài liệu cho bất kỳ mục đích nào khác sẽ là vi phạm quyền tác giả và các quyền sở hữu trí tuệ khác của Savills và quyền tác giả và các quyền sở hữu trí tuệ khác của những chủ sở hữu tương ứng.`,
        },
      ],
    },

    {
      subtitle: {
        numbering: "6.",
        en: "USE OF SYSTEM",
        vi: "SỬ DỤNG HỆ THỐNG",
      },
      descriptions: [
        {
          numbering: "6.1.",
          en: `You agree to use this System in accordance with these Terms and Conditions and for lawful and proper purposes. You agree to be responsible for all matters arising from your use of this System. Further, you agree:`,
          vi: `Bạn đồng ý sử dụng Hệ Thống này theo Điều Khoản và Điều Kiện này và cho các mục đích hợp pháp. Bạn đồng ý chịu trách nhiệm về mọi vấn đề phát sinh từ việc sử dụng Hệ Thống này của bạn. Hơn nữa, bạn đồng ý:`,
        },
        {
          numbering: "(a)",
          en: `Not to use this System in any manner which may breach the applicable law on cyber security and any other relevant laws or regulation; or which causes or may cause an infringement of any third party rights;`,
          vi: `Không được sử dụng Hệ Thống này dưới bất kỳ hình thức nào mà có thể dẫn đến sự vi phạm luật an ninh mạng và bất kỳ luật hoặc quy định khác có liên quan; hoặc gây ra hoặc có thể gây ra một sự xâm phạm bất kỳ quyền của bất kỳ bên thứ ba nào;`,
        },
        {
          numbering: "(b)",
          en: `Not to transmit, post or disseminate any information on or via this System which may be harmful, defamatory, obscene, or illegal or create liability on the part of Savills;`,
          vi: `Không được truyền tải, đăng tải hoặc phổ biến bất kỳ thông tin nào trên hoặc thông qua Hệ Thống này mà có nội dung gây hại, phỉ báng, khiêu dâm, bất hợp pháp hoặc tạo ra trách nhiệm pháp lý cho Savills;`,
        },
        {
          numbering: "(c)",
          en: `Not to interfere or attempt to interfere with the operation or functionality of this System; and`,
          vi: `Không được can thiệp hoặc cố gắng can thiệp vào hoạt động hoặc chức năng của Hệ Thống này; và`,
        },
        {
          numbering: "(d)",
          en: `Not to obtain or attempt to obtain unauthorized access, via any means whatsoever, to any of Savills’s systems.`,
          vi: `Không được thực hiện hoặc cố gắng thực hiện việc truy cập trái phép, bằng bất kỳ phương thức nào, đến bất kỳ hệ thống nào thuộc sở hữu của Savills.`,
        },
        {
          numbering: "6.2.",
          en: `If Savills (in its sole discretion) believes that you are in breach, or will be in breach, of any of these Terms and Conditions, Savills reserves its right to temporarily deny your access to this System without giving you a reason and/or without further reference to you.`,
          vi: `Nếu Savills (theo quyết định của mình) tin rằng bạn vi phạm, hoặc sẽ vi phạm bất kỳ Điều Khoản và Điều Kiện nào, Savills bảo lưu quyền từ chối tạm thời việc truy cập của bạn vào Hệ Thống này mà không cần nêu ra bất kỳ lý do gì và/hoặc không cần gửi thông báo đến bạn.`,
        },
      ],
    },

    {
      subtitle: {
        numbering: "7.",
        en: "WARRANTY DISCLAIMERS",
        vi: "TỪ CHỐI BẢO ĐẢM",
      },
      descriptions: [
        {
          numbering: "7.1.",
          en: `The information contained in this System, including all text, names, images, pictures, graphics, logos, icons, links and other items, are provided "as is". Savills does not warrant, represent or undertake in any manner whatsoever the accuracy, correctness, adequacy, completeness or suitability of such information and hereby expressly disclaims liability for errors or omissions in such information. You must always verify such information before you act upon it. You shall not rely on anything herein in connection with any investment decision. User shall also be solely responsible for the confidentiality and retention of any use of System under their usernames, passwords and emails.`,
          vi: `Thông tin trong Hệ Thống này, bao gồm tất cả các ký tự, tên, ảnh, hình ảnh, đồ hoạ, biểu trưng, biểu tượng, liên kết và các mục khác được cung cấp dưới dạng "nguyên trạng". Savills không bảo đảm, tuyên bố hoặc cam kết bằng bất cứ hình thức nào về tính chính xác, đầy đủ, thích hợp, hoàn chỉnh hoặc phù hợp của thông tin đó và theo đây từ chối một cách rõ ràng mọi trách nhiệm pháp lý đối với những sai sót hoặc thiếu sót trong các thông tin này. Bạn phải luôn xác minh những thông tin đó trước khi có bất kỳ hành động nào dựa trên các thông tin này. Bạn không nên dựa vào bất cứ điều gì trong những thông tin này để đưa ra các quyết định đầu tư của mình. Người Dùng cũng phải tự chịu trách nhiệm về việc bảo mật và lưu giữ các thông tin liên quan đến tên đăng nhập, mật khẩu và các thư điện tử của mình trong quá trình sử dụng Hệ Thống.`,
        },
        {
          numbering: "7.2.",
          en: `No warranty or representation of any kind, expressed, implied or statutory, including but not limited to the warranties or representations of merchantability, fitness for a particular purpose, non-infringement and title, is given by Savills in conjunction with any information on these pages and any such warranty or representation is hereby expressly excluded.`,
          vi: `Không có bất kỳ bảo đảm hoặc tuyên bố dưới bất kỳ hình thức nào, dù là rõ ràng, ngụ ý hay theo quy định, bao gồm nhưng không giới hạn sự bảo đảm hoặc tuyên bố về khả năng thương mại, tính phù hợp cho một mục đích cụ thể nào, sự không vi phạm và quyền sở hữu, được đưa ra bởi Savills đối với bất kỳ thông tin nào trên các trang này và bất kỳ bảo đảm hoặc tuyên bố nào như vậy theo đây sẽ được loại trừ rõ ràng.`,
        },
        {
          numbering: "7.3.",
          en: `Savills also does not warrant that this System and its pages or the server that makes them available are free from computer virus or other corrupting or destructive codes, programs, macros or elements of any kind, nor is any warranty given for the timely, secure, complete, error-free or uninterrupted access to all contents on this System. `,
          vi: `Savills cũng không bảo đảm rằng Hệ Thống này và các trang thuộc Hệ Thống này hoặc máy chủ nơi chứa đựng các trang này không có virus máy tính hoặc các mã, chương trình, ngôn ngữ lập trình độc hại hoặc phá hoại hoặc các yếu tố tương tự, cũng như không bảo đảm cho các vấn đề về truy cập nhanh chóng, an toàn, hoàn chỉnh, không có lỗi hoặc không bị gián đoạn trong khi truy cập vào tất cả các nội dung trên Hệ Thống này.`,
        },
      ],
    },

    {
      subtitle: {
        numbering: "8.",
        en: "EXCLUSION OF LIABILITY",
        vi: "LOẠI TRỪ TRÁCH NHIỆM",
      },
      descriptions: [
        {
          numbering: "8.1.",
          en: `The access and/or use of any information, features or facilities contained in or integrated with this System are at the sole risk of the User. Subject to applicable law, under no circumstances shall Savills or any of its subsidiaries, affiliates, marketing partners, suppliers, officers or employees be liable for any losses, damages, costs and expenses whatsoever (whether direct, indirect, punitive, exemplary, consequential, incidental, special or economic including loss of profits) whether in an action in contract, negligence or tort arising out of or in connection with:`,
          vi: `BNgười Dùng sẽ phải tự chịu mọi rủi ro liên quan đến việc truy cập và/hoặc sử dụng bất kỳ thông tin, tính năng hoặc tiện ích nào có trong hoặc được tích hợp với Hệ Thống này. Phụ thuộc vào luật pháp hiện hành, không trong trường hợp nào Savills hoặc bất kỳ công ty con, chi nhánh, đối tác tiếp thị, nhà cung cấp, cán bộ hoặc nhân viên của Savills sẽ phải chịu trách nhiệm về bất kỳ tổn thất, thiệt hại, chi phí và phí tổn nào (bất kể là trực tiếp, gián tiếp, trừng phạt, làm gương, kèm theo, ngẫu nhiên, đặc biệt hoặc kinh tế bao gồm cả tổn thất lợi nhuận) dù là do một hành động theo hợp đồng, sơ suất hoặc vi phạm ngoài hợp đồng phát sinh từ hoặc liên quan đến:`,
        },
        {
          numbering: "(a)",
          en: `the access or use, inability to access or use, or incomplete, delayed or interrupted access or use of this System, the features or facilities integrated therewith, or any other System/application linked to this System;`,
          vi: `việc truy cập hoặc sử dụng, không có khả năng truy cập hoặc sử dụng, hoặc truy cập chưa hoàn thành, bị trì hoãn hoặc bị gián đoạn tới Hệ Thống này, các tính năng hoặc tiện ích được tích hợp, hoặc bất kỳ trang web/ứng dụng nào có liên kết với Hệ Thống này;`,
        },
        {
          numbering: "(b)",
          en: `the reliance on information contained on this System or on any other System/application linked to this System;`,
          vi: `sự tin cậy vào thông tin trên Hệ Thống này hoặc trên bất kỳ trang web/ứng dụng nào khác liên kết với Hệ Thống này;`,
        },
        {
          numbering: "(c)",
          en: `the failure of performance, error, omission or defect of any network, line or server system or the transmission to any computer hardware or software used in accessing this System of any computer virus or other corrupting or destructive codes, programs, macros or elements of any kind; or`,
          vi: `sự thất bại trong quá trình vận hành, sai sót, thiếu sót hoặc khiếm khuyết của bất kỳ hệ thống mạng, đường dây hoặc hệ thống máy chủ nào hoặc việc truyền tải tới bất kỳ phần cứng hoặc phần mềm máy tính nào được dùng để truy cập Hệ Thống này do sự ảnh hưởng của bất kỳ vi-rút máy tính nào hoặc các mã, chương trình, ngôn ngữ lập trình độc hại hoặc phá hoại khác hoặc bất kỳ yếu tố nào khác; hoặc`,
        },
        {
          numbering: "(d)",
          en: `the access by any unauthorized person to any information transmitted by you to Savills or vice versa through this System.`,
          vi: `việc truy cập bởi bất kỳ người không có thẩm quyền nào đối với bất kỳ thông tin nào được chuyển từ bạn đến Savills hoặc ngược lại thông qua Hệ Thống này.`,
        },
        {
          numbering: "8.2.",
          en: `This exclusion clause shall take effect to the fullest extent permitted by law.`,
          vi: `Điều khoản loại trừ trách nhiệm này có hiệu lực trong phạm vi tối đa được pháp luật cho phép.`,
        },
        {
          numbering: "8.3.",
          en: `Any publication of Savills may include technical inaccuracies or typographical errors. Amendments may be made to these publications from time to time and incorporated in new editions of these publications. At any time without notice, these publications are subject to improvements and changes in service by Savills.`,
          vi: `Bất kỳ ấn phẩm nào của Savills có thể bao gồm các sai sót về kỹ thuật hoặc lỗi đánh máy. Những sửa đổi có thể được thực hiện đối với các ấn phẩm này tùy từng thời điểm và được kết hợp chặt chẽ với những phiên bản mới của những ấn phẩm này. Bất cứ khi nào và không cần thông báo, các ấn phẩm này phụ thuộc vào sự cải tiến và thay đổi về dịch vụ cung cấp bởi Savills.`,
        },
      ],
    },

    {
      subtitle: {
        numbering: "9.",
        en: "INDEMNITY",
        vi: "BỒI THƯỜNG",
      },
      descriptions: [
        {
          numbering: " ",
          en: `You agree to indemnify and hold Savills and its officers, agents, partners and employees, harmless from all claims, demands, actions, proceedings, liabilities (including liability to third parties), penalties, and costs (including without limitation, legal costs on a full indemnity basis), awards, losses and/or expenses, due to or arising out of:`,
          vi: `Bạn đồng ý bồi thường và giữ cho Savills và các cán bộ, đại lý, đối tác và nhân viên của họ không bị thiệt hại bởi mọi khiếu nại, yêu cầu, kiện cáo, tố tụng, trách nhiệm pháp lý (kể cả trách nhiệm pháp lý đối với các bên thứ ba), khoản phạt, và chi phí (bao gồm nhưng không giới hạn ở chi phí pháp lý trên cơ sở bồi thường toàn bộ), các khoản phạt, tổn thất và/hoặc phí tổn do hoặc phát sinh từ:`,
        },
        {
          numbering: "(a)",
          en: `any use of this System;`,
          vi: `việc sử dụng Hệ Thống này;`,
        },
        {
          numbering: "(b)",
          en: `your connection to this System;`,
          vi: `việc kết nối của bạn đến Hệ Thống này;`,
        },
        {
          numbering: "(c)",
          en: `your breach of any of these Terms and Conditions;`,
          vi: `sự vi phạm của bạn đối với bất kỳ Điều Khoản và Điều Kiện nào;`,
        },
        {
          numbering: "(d)",
          en: `your violation of any rights of another person or entity; or`,
          vi: `sự vi phạm của bạn đối với bất kỳ quyền của cá nhân hoặc tổ chức nào khác; hoặc`,
        },
        {
          numbering: "(e)",
          en: `your breach of any statutory requirement, duty or law.`,
          vi: `sự vi phạm của bạn đối với bất cứ yêu cầu, nghĩa vụ luật định hay quy định pháp luật nào.`,
        },
      ],
    },

    {
      subtitle: {
        numbering: "10.",
        en: "LINKS TO THIRD PARTY SITE",
        vi: "LIÊN KẾT ĐẾN TRANG CỦA BÊN THỨ BA",
      },
      descriptions: [
        {
          numbering: "10.1.",
          en: `This System may contain links to other website, systems/applications which are not under the control of and are not maintained by Savills and the contents, opinions and other links provided by these websites, systems/applications are not investigated, verified or monitored by Savills. Similarly, other website, systems/applications may contain links to this System. Savills will not be responsible for the contents, opinions or other links contained in any such linked website, systems/applications or any changes or updates thereto. Such links are provided only as a convenience, and the inclusion of any such links is not an endorsement by Savills of the website, system/application or the contents therein, and you are put on notice that any access by you of such linked website, systems/applications is at your own risk.`,
          vi: `Hệ Thống này có thể chứa các liên kết đến các trang web, hệ thống/ứng dụng khác không thuộc sự kiểm soát và duy trì bởi Savills, và các nội dung, ý kiến và các liên kết khác được cung cấp bởi những trang web, hệ thống/ứng dụng này không được kiểm tra, xác nhận hoặc giám sát bởi Savills. Tương tự, các trang web, hệ thống/ứng dụng khác có thể chứa liên kết đến Hệ Thống này. Savills sẽ không chịu trách nhiệm về nội dung, ý kiến hoặc các liên kết khác trong các trang web, hệ thống/ứng dụng liên kết đó hoặc bất kỳ thay đổi hay cập nhật nào của nó. Các liên kết này được cung cấp chỉ như một tiện ích, và việc đưa vào bất kỳ liên kết nào như vậy không phải là sự xác thực của Savills về trang we, hệ thống b/ứng dụng hoặc các nội dung trong đó, và bạn đã được thông báo rằng bất kỳ sự truy cập nào của bạn tới các trang web, hệ thống/ứng dụng liên kết như vậy sẽ là rủi ro của riêng bạn.`,
        },
        {
          numbering: "10.2.",
          en: `Any third party that desires to establish links to this System should provide prior notification to Savills of their intention to do so. Savills may deny permission for any such links to this System. If, however Savills permits any such links, Savills is not under any obligation to establish reciprocal links with the third party. Savills may remove such links on this System serving any notices or obtaining your consent in advance.`,
          vi: `Bất kỳ bên thứ ba nào muốn thiết lập liên kết đến Hệ Thống này phải thông báo trước cho Savills về ý định thực hiện của họ. Savills có thể từ chối bất kỳ liên kết nào đến Hệ Thống này. Tuy nhiên, nếu Savills cho phép bất kỳ liên kết nào như vậy, Savills cũng không có nghĩa vụ phải thiết lập liên kết đối ứng với bên thứ ba. Savills có thể gỡ bỏ những liên kết trên Hệ Thống này mà không phải thông báo hoặc có được sự đồng ý trước của bạn.`,
        },
        {
          numbering: "10.3.",
          en: `The System may be integrated with features or facilities developed by the third party(ies) for Users’ convenience. While using them is optional and is not intended to create any discrimination between Users, you may incur additional charges for the use of these features or facilities since they are not provided by Savills.`,
          vi: `Hệ Thống này có thể được tích hợp với các chức năng hoặc tiện ích được phát triển bởi (các) bên thứ ba để tạo sự thuận tiện cho Người Dùng. Mặc dù việc sử dụng những tính năng này là tùy chọn và không có bất kỳ sự phân biệt đối xử nào giữa các Người Dùng, bạn có thể phải trả thêm phí cho việc sử dụng những chức năng hoặc tiện ích này vì chúng không được cung cấp bởi Savills.`,
        },
      ],
    },

    {
      subtitle: {
        numbering: "11.",
        en: "SUBMISSION OF INFORMATION",
        vi: "CUNG CẤP THÔNG TIN",
      },
      descriptions: [
        {
          numbering: "11.1.",
          en: `All information submitted to Savills via this System shall be deemed and remain the property of Savills who shall be free to use, for any purpose, any ideas, concepts, know-how or techniques contained in information a visitor to this System provides Savills through this System. Savills shall not be subject to any obligations of confidentiality or privacy regarding submitted information except as agreed by the Savills or as otherwise specifically agreed or required by law.`,
          vi: `Mọi thông tin cung cấp cho Savills qua Hệ Thống này sẽ được xem và duy trì là tài sản của Savills, Savills được toàn quyền sử dụng cho bất kỳ mục đích, ý tưởng, khái niệm, bí quyết hay kỹ thuật nào được chứa đựng trong thông tin mà khách truy cập vào Hệ Thống này cung cấp cho Savills . Savills không phải tuân theo các nghĩa vụ bảo mật hoặc quy định riêng tư đối với thông tin đã được cung cấp, trừ trường hợp được đồng ý bởi Savills hoặc hình thức khác có sự đồng ý cụ thể hoặc theo yêu cầu cụ thể của pháp luật.`,
        },
        {
          numbering: "11.2.",
          en: `All provided information must be accurate and legal. Savills disclaims all responsibilities for the accuracy and truthfulness of the information disclosed. `,
          vi: `Tất cả các thông tin được cung cấp phải chính xác và hợp pháp. Savills từ chối mọi trách nhiệm về tính chính xác và trung thực của thông tin được cung cấp.`,
        },
      ],
    },

    {
      subtitle: {
        numbering: "12.",
        en: "INTELLECTUAL PROPEPRTY",
        vi: "SỞ HỮU TRÍ TUỆ",
      },
      descriptions: [
        {
          numbering: "12.1.",
          en: `Copyright in the contents of these pages, in the information therein and in their arrangement, is owned by Savills unless otherwise indicated.`,
          vi: `Quyền tác giả trong nội dung của các trang này, thông tin trong đó và sự sắp xếp thông tin của chúng, thuộc sở hữu của Savills trừ khi có quy định cụ thể khác đi.`,
        },
        {
          numbering: "12.2.",
          en: `Savills, its subsidiaries, contractors and/or participating corporations are the owners of the trade and service marks appearing on this System and all rights are reserved in respect of such trade and service marks. Nothing contained on this System should be construed as our grant any license or right to use our trade and service marks. `,
          vi: `Savills, các công ty con, chi nhánh, nhà thầu và/hoặc các công ty liên kết của mình là chủ sở hữu nhãn hiệu và biểu tượng dịch vụ xuất hiện trên Hệ Thống này và tất cả các quyền đối với các nhãn hiệu và biểu tượng dịch vụ này được bảo lưu. Không có nội dung nào trong Hệ Thống này có thể hiểu là sự cấp phép hoặc cấp quyền để sử dụng nhãn hiệu và thương hiệu của chúng tôi.`,
        },
      ],
    },

    {
      subtitle: {
        numbering: "13.",
        en: "DATA PRIVACY PROTECTION",
        vi: "BẢO MẬT DỮ LIỆU",
      },
      descriptions: [
        {
          numbering: "13.1.",
          en: `As part of the normal operation of our services and the System, we may collect and use your personal information for the following purposes:`,
          vi: `Như một phần trong hoạt động bình thường của các dịch vụ của chúng tôi và Hệ Thống, chúng tôi có thể thu thập và sử dụng các thông tin cá nhân của bạn cho các mục đích sau:`,
        },
        {
          numbering: "(f)",
          en: `For employment-related purposes;`,
          vi: `Các mục đích liên quan tới việc tuyển dụng;`,
        },
        {
          numbering: "(g)",
          en: `Where we need information to perform the contract we have entered into with you;`,
          vi: `Khi chúng tôi cần thông tin để thực hiện hợp đồng đã ký kết với bạn;`,
        },
        {
          numbering: "(h)",
          en: `Where we need to comply with a legal obligation;`,
          vi: `Khi chúng tôi cần tuân thủ một nghĩa vụ pháp lý;`,
        },
        {
          numbering: "(i)",
          en: `Where the processing is necessary for us to carry out activities for which it is in Savills' legitimate interests (or those of a third party) to do so and provided that your interests and fundamental rights do not override those interests, including: `,
          vi: `Trong trường hợp cần thiết để chúng tôi thực hiện các hành vi vì lợi ích hợp pháp của Savills (hoặc của một bên thứ ba) và với điều kiện các lợi ích và quyền cơ bản của bạn không mâu thuẫn với những lợi ích đó, bao gồm:`,
        },
        {
          numbering: "(1)",
          en: `Processing that is necessary for us to promote our business, brands and products and measure the reach and effectiveness of our campaigns. – this will include sending you marketing information from time to time after you have engaged us to provide services or received services from us either which may be similar and of interest to you or where you have expressly indicated that you would like to receive such information. You have the right to opt out of receiving this information at any time.`,
          vi: `Trong trường hợp cần thiết để chúng tôi quảng bá doanh nghiệp, thương hiệu và các sản phẩm của chúng tôi và đánh giá kết quả và hiệu quả của các chiến dịch của chúng tôi – điều này sẽ bao gồm gửi việc cho bạn các thông tin tiếp thị tùy từng thời điểm sau khi bạn đã thuê chúng tôi để cung cấp các dịch vụ hoặc nhận được các dịch vụ từ chúng tôi dù là có thể tương tự và liên quan tới bạn hoặc trong trường hợp bạn nêu rõ bạn muốn nhận những thông tin này. Bạn có quyền từ chối nhận thông tin này bất kỳ lúc nào.`,
        },
        {
          numbering: "(2)",
          en: `Processing that is necessary to improve our knowledge of the real estate sector – this will include undertaking market analysis and research so that we better understand trends in the property sector and provide better knowledge along with more tailored and relevant services for our customers in the future.`,
          vi: `Trong trường hợp cần thiết để nâng cao sự hiểu biết của chúng tôi về lĩnh vực bất động sản – điều này sẽ bao gồm việc thực hiện phân tích và nghiên cứu thị trường để chúng tôi hiểu rõ hơn về các xu hướng trong lĩnh vực bất động sản và cung cấp những kiến thức tốt hơn cùng với các dịch vụ có liên quan cho các khách hàng của chúng tôi trong tương lai.`,
        },
        {
          numbering: "(3)",
          en: `Processing necessary for us to operate the administrative and technical aspects of our business efficiently and effectively – this will include: verifying the accuracy of information that we hold about you and create a better understanding of you as a customer; processing for administrative efficiency purposes such as where we outsource certain administrative functions to third parties who are specialise in such services; processing for network and information security purposes i.e. in order for us to take steps to protect your information against loss, damage, theft or unauthorised access or to comply with a request from you in connection with the exercise of any of your rights outlined below.`,
          vi: `Trong trường hợp cần thiết để chúng tôi thực hiện các công việc hành chính và kỹ thuật trong quá trình kinh doanh một cách hiệu quả - điều này sẽ bao gồm: xác minh tính chính xác của thông tin mà chúng tôi nắm giữ về bạn và tạo ra một sự hiểu biết tốt hơn về bạn như là một khách hàng; cho các mục đích hành chính hiệu quả như việc chúng tôi thuê ngoài một số chức năng hành chính từ các bên thứ ba chuyên cung cấp các dịch vụ này; cho các mục đích bảo mật thông tin và mạng như để chúng tôi thực hiện các bước bảo mật thông tin của bạn khỏi những thiệt hại, hư hỏng, mất cắp hoặc truy cập trái phép hoặc để tuân thủ theo yêu cầu của bạn liên quan tới việc thực hiện bất kỳ quyền nào của bạn được nêu dưới đây.`,
        },
        {
          numbering: "(j)",
          en: `In more limited circumstances we may also rely on the following legal bases:`,
          vi: `Trong những trường hợp hạn chế hơn, chúng tôi có thể dựa vào các căn cứ pháp lý sau:`,
        },
        {
          numbering: "(1)",
          en: `Where we need to protect your interests (or someone else's interests); and/or`,
          vi: `Khi chúng tôi cần bảo vệ quyền lợi của bạn (hoặc quyền lợi của một người khác); và/hoặc`,
        },
        {
          numbering: "(2)",
          en: `We will only retain the personal information as long as necessary for the fulfillment of those purposes. The period for which we will keep your personal information will depend on the type of service you have requested from us. The retention period may be longer than the period for which we are providing services to you where we have statutory or regulatory obligations to retain personal information for a longer period, or where we may need to retain the information in case of a legal claim. `,
          vi: `Khi cần thiết vì quyền lợi của cộng đồng hoặc cho các mục đích chính thức.`,
        },
        {
          numbering: "13.2.",
          en: `You should immediately change your PIN or password if you become aware that a third party or otherwise is accessing or trying to access Services on your account without your permission.`,
          vi: `Chúng tôi sẽ chỉ lưu giữ thông tin cá nhân khi cần thiết cho việc hoàn thành các mục đích đã nêu. Thời gian chúng tôi lưu giữ thông tin cá nhân của bạn sẽ phụ thuộc vào loại dịch vụ mà bạn đã yêu cầu từ chúng tôi. Thời gian lưu giữ có thể lâu hơn thời gian chúng tôi cung cấp các dịch vụ cho bạn khi chúng tôi có nghĩa vụ theo luật định phải lưu giữ thông tin cá nhân trong một khoảng thời gian dài hơn, hoặc trong trường hợp chúng tôi có thể cần lưu giữ thông tin trong trường hợp khiếu nại pháp lý.`,
        },
        {
          numbering: "13.3.",
          en: `We may need to pass your personal information from time to time on to third party contractors whom we have engaged to carry out the services. We may transfer, store, or process your personal information in locations outside Vietnam. Where the countries to which your personal information is transferred do not offer an equivalent level of protection for personal information to the laws of Vietnam, we will ensure that appropriate safeguards are put in place.`,
          vi: `Tùy từng thời điểm, chúng tôi có thể cần chuyển thông tin cá nhân của bạn cho bên thứ ba mà chúng tôi đã thuê để thực hiện các dịch vụ. Chúng tôi có thể chuyển, lưu trữ hoặc xử lý thông tin cá nhân của bạn tại các địa điểm bên ngoài Việt Nam. Trường hợp các quốc gia mà thông tin cá nhân của bạn được chuyển đến không cung cấp mức độ bảo vệ tương đương cho thông tin cá nhân theo luật pháp Việt Nam, chúng tôi sẽ đảm bảo áp dụng các biện pháp bảo vệ phù hợp.`,
        },
        {
          numbering: "13.4.",
          en: `Your personal data may be processed by us, our partners, sales persons, agents and third parties providing services in Savills in jurisdictions outside of Vietnam. In this event, Savills will comply with the terms of the laws of those jurisdictions.`,
          vi: `Các dữ liệu cá nhân của bạn có thể được xử lý bởi chúng tôi, các đối tác, nhân viên bán hàng, đại lý của chúng tôi và các bên thứ ba cung cấp các dịch vụ cho Savills trong phạm vi ngoài Việt Nam. Trong trường hợp này, Savills sẽ tuân thủ các điều khoản pháp luật của các khu vực đó.`,
        },
        {
          numbering: "13.5.",
          en: `We will protect personal information by reasonable security safeguards against loss or theft, as well as unauthorized access, disclosure, copying, use or modification.`,
          vi: `Chúng tôi sẽ bảo vệ thông tin cá nhân bằng các biện pháp bảo vệ an toàn hợp lý khỏi mất mát hoặc trộm cắp, cũng như truy cập, tiết lộ, sao chép, sử dụng hoặc chỉnh sửa trái phép.`,
        },
        {
          numbering: "13.6.",
          en: `You may update or adjust your personal information by the accessing to the account management function in the System. If you have any inquiries, requests, or complaints concerning your personal information, please contact us by sending an email to <a class="link" href="mailto:info@savills.com.vn">info@savills.com.vn</a> or writing to us at Doji Tower, 18 floor, 81-83-83B-85 Ham Nghi, Nguyen Thai Binh Ward, District 1, Ho Chi Minh City, Vietnam.`,
          vi: `Bạn có thể cập nhật hoặc điều chỉnh thông tin cá nhân của bạn bằng cách truy cập vào chức năng quản lý tài khoản trên Hệ Thống. Nếu bạn có bất kỳ câu hỏi, yêu cầu, hoặc khiếu nại nào liên quan tới thông tin cá nhân của bạn, vui lòng liên hệ chúng tôi bằng cách gửi thư điện tử tới info@savills.com.vn hoặc gửi thư cho chúng tôi tới địa chỉ Doji Tower, lầu 18, 81-83-83B-85 Hàm Nghi, Phường Nguyễn Thái Bình, Quận 1, Thành phố Hồ Chí Minh, Việt Nam.`,
        },
      ],
    },

    {
      subtitle: {
        numbering: "14.",
        en: "GOVERNING LAW & JURISDICTION",
        vi: "LUẬT ĐIỀU CHỈNH VÀ QUYỀN TÀI PHÁN",
      },
      descriptions: [
        {
          numbering: "14.1.",
          en: `By accessing this System and obtaining the facilities, products or services offered through this System, you agree that Vietnam laws shall govern such access and the provision of such facilities, products or services.`,
          vi: `Bằng cách truy cập Hệ Thống này và có được các thông tin về tiện ích, sản phẩm hoặc dịch vụ từ Hệ Thống, bạn đồng ý rằng luật pháp Việt Nam sẽ điều chỉnh việc truy cập và cung cấp những thông tin, sản phẩm hoặc dịch vụ này.`,
        },
        {
          numbering: "14.2.",
          en: `Disputes arising from or in connection with use of this System shall be under jurisdiction of the court of Vietnam.`,
          vi: `Các tranh chấp phát sinh từ hoặc liên quan tới việc sử dụng Hệ Thống này sẽ thuộc thẩm quyền của tòa án Việt Nam.`,
        },
        {
          numbering: "14.3.",
          en: `No hyperlinking of this System to any other System/application or the mirroring or reproduction of any information on this System on any other System/application or the use of any information therein for any public or commercial purpose is permitted without the prior written consent of Savills, which consent may be granted or refused at its sole discretion and may be subject to terms and conditions imposed by Savills.`,
          vi: `Không được gắn liên kết ẩn của Hệ Thống này tới bất kỳ hệ thống/ứng dụng nào khác, hoặc sao chép bất kỳ thông tin nào trên Hệ Thống này và dùng cho bất kỳ hệ thống/ứng dụng nào khác hoặc sử dụng bất kỳ thông tin nào ở đây cho bất kỳ mục đích công cộng hoặc thương mại nào mà không có sự đồng ý trước bằng văn bản của Savills, Savills có thể chấp thuận hoặc từ chối tùy theo quyền quyết định riêng của Savills và có thể phải tuân theo các điều khoản và điều kiện do Savills đặt ra.`,
        },
      ],
    },
  ];

  return (
    <>
      <div className="terms">
        <div className="terms-articles" ref={this.article}>
          <article className="section">
            <h3 className="section-title">
              <span className="section-title--en">SAVILLS REPORT PORTAL</span>
              <br />
              <em className="section-title--vi">WEBSITE TRUY CẬP BÁO CÁO</em>
            </h3>
            <h4 className="section-subtitle">
              <span className="section-subtitle--en">TERMS AND CONDITIONS</span>
              <br />
              <em className="section-subtitle--vi">ĐIỀU KHOẢN VÀ ĐIỀU KIỆN </em>
            </h4>
            <div className="section-description">
              <span className="section-description--en">
                Please read below terms & conditions and the website Privacy
                Notice carefully (collectively{" "}
                <strong>“Terms & Conditions”</strong>) before using this
                website, S22M report portal, and/or the applications including
                mobile applications (hereinafter collectively referred to as{" "}
                <strong>“System”</strong>).
              </span>
              <br />
              <em className="section-description--vi">
                Vui lòng đọc kỹ những điều khoản & điều kiện và Thông Báo Bảo
                Mật dưới đây (gọi chung là{" "}
                <strong>“Điều Khoản & Điều Kiện”</strong>) trước khi sử dụng
                trang web truy cập báo cáo S22M, và/hoặc ứng dụng này bao gồm cả
                các ứng dụng di động (sau đây gọi chung là{" "}
                <strong>“Hệ Thống”</strong>).
              </em>
            </div>

            <div className="section-description">
              <span className="section-description--en">
                This System is developed and owned by Savills Group and/or its
                subsidiary(ies) and/or its affiliate(s) (hereinafter
                collectively referred to as <strong>“Savills”</strong>, and
                where the context requires or permits, “Savills” may refer to
                any one of Savills Group and/or its subsidiary(ies) and/or its
                affiliate(s)) and/or any services made available to a party (
                <strong>“Customer”</strong> or <strong>“you”</strong>) who has
                signed any real estate management agreement or service order
                form or engagement letter (hereinafter singly or collectively
                referred as the <strong>“Management Agreement”</strong>) with
                any subsidiary or affiliate of Savills Group for using any
                modules of the System and/or any related services. The services
                provided through the System shall only be available to the users
                authorized by the Customer (<strong>“User”</strong> or{" "}
                <strong>“you”</strong>
                ).
              </span>
              <br />
              <em className="section-description--vi">
                Hệ Thống này được phát triển và sở hữu bởi Savills Group và/hoặc
                (các) công ty con và/hoặc (các) thành viên của mình (sau đây gọi
                chung là gọi là <strong>“Savills”</strong>, và trong trường hợp
                hoàn cảnh yêu cầu hoặc cho phép, thì “Savills” có thể đề cập đến
                bất kỳ bên nào trong Savills Group và/hoặc (các) công ty con
                và/hoặc (các) thành viên mình và/hoặc bất kỳ dịch vụ nào được
                cung cấp cho một bên (<strong>“Khách Hàng”</strong> hoặc{" "}
                <strong>“bạn”</strong>) đã ký kết bất kỳ hợp đồng quản lý bất
                động sản hoặc mẫu đơn đặt hàng dịch vụ hoặc thư cam kết (sau đây
                gọi riêng hoặc chung là <strong>“Hợp Đồng Quản Lý”</strong>) với
                bất kỳ công ty con hoặc thành viên nào của Savills Group để sử
                dụng bất kỳ mô-đun nào của Hệ Thống và/hoặc bất kỳ dịch vụ nào
                có liên quan. Các dịch vụ được cung cấp qua Hệ Thống sẽ chỉ dành
                cho những người dùng được Khách Hàng ủy quyền (
                <strong>“Người Dùng”</strong> hoặc <strong>“bạn”</strong>).
              </em>
            </div>

            <div className="section-description">
              <span className="section-description--en">
                Access to and use of the contents and services provided on the
                System shall be subject to these Terms and Conditions. By using
                the System and/or applications accessed through such System,
                Users acknowledge and agree that the website Privacy Notice and
                the Terms and Conditions set out herein are binding upon them.
                If a User does not accept either or both of the Privacy Notice
                and the Terms and Conditions, please do not use the System.
                Savills reserves the right, at its own discretion, to revise the
                Privacy Notice and the Terms and Conditions at any time without
                prior notice. Once posted on the System, the amended Privacy
                Notice and the Terms and Conditions shall apply to all Users.
                Users are advised to visit this page periodically to review the
                latest Privacy Notice and the Terms and Conditions. A User’s
                access to the System and the Services (as defined below) will be
                terminated upon his/her notice to Savills that any change is
                unacceptable; otherwise the continued use shall constitute
                acceptance of all changes and they shall be binding upon the
                User.
              </span>
              <br />
              <em className="section-description--vi">
                Việc truy cập và sử dụng các nội dung và dịch vụ được cung cấp
                trên Hệ Thống phải tuân theo các Điều Khoản và Điều Kiện này.
                Bằng việc sử dụng Hệ Thống và/hoặc các ứng dụng được truy cập
                qua Hệ Thống này, Người Dùng thừa nhận và đồng ý bị ràng buộc
                bởi Thông Báo Bảo Mật và Điều Khoản và Điều Kiện được nêu ở đây.
                Nếu Người Dùng không chấp nhận bất kỳ hoặc cả hai Thông Báo Bảo
                Mật và Điều Khoản và Điều Kiện, vui lòng không sử dụng Hệ Thống.
                Savills bảo lưu quyền, theo quyết định riêng của mình, sửa đổi
                Thông Báo Bảo Mật và Điều Khoản và Điều Kiện bất cứ lúc nào mà
                không cần thông báo trước. Khi đã được đăng tải trên Hệ Thống,
                Thông Báo Bảo Mật và Điều Khoản và Điều Kiện sửa đổi được áp
                dụng cho tất cả Người Dùng. Người Dùng nên truy cập trang này
                định kỳ để xem Thông Báo Bảo Mật và Điều Khoản và Điều Kiện mới
                nhất. Quyền truy cập của Người Dùng vào Hệ Thống và Dịch Vụ (như
                được định nghĩa dưới đây) sẽ chấm dứt khi Người Dùng thông báo
                cho Savills về việc không đồng ý với bất kỳ thay đổi nào; ngoài
                ra, việc tiếp tục sử dụng sẽ cấu thành sự chấp thuận tất cả các
                thay đổi và Người Dùng sẽ bị ràng buộc bởi những thay đổi này.
              </em>
            </div>

            <div className="section-description">
              <span className="section-description--en">
                Your agreement with us (this <strong>“Appointment”</strong>) is
                made up of the following documents:
              </span>
              <br />
              <em className="section-description--vi">
                Sự đồng thuận của bạn với chúng tôi (
                <strong>“Thỏa Thuận”</strong>) được tạo thành từ những tài liệu
                sau:
              </em>
            </div>

            <ol className="section-list">
              <li className="section-list-item">
                <CRow>
                  <span className="section-bullets">a)</span>
                  <div className="section-items">
                    <span className="section-description--en">
                      The Appendix/Schedule;
                    </span>
                    <br />
                    <em className="section-description--vi">
                      Phụ lục/Phụ đính;
                    </em>
                  </div>
                </CRow>
              </li>
              <li className="section-list-item">
                <CRow>
                  <span className="section-bullets">b)</span>
                  <div className="section-items">
                    <span className="section-description--en">
                      Service Agreement entered into between Savills and
                      Customer;
                    </span>
                    <br />
                    <em className="section-description--vi">
                      Hợp Đồng Dịch Vụ được ký kết giữa Savills và Khách Hàng;
                    </em>
                  </div>
                </CRow>
              </li>
              <li className="section-list-item">
                <CRow>
                  <span className="section-bullets">c)</span>
                  <div className="section-items">
                    <span className="section-description--en">
                      Any product specific terms and conditions, and Refer to
                      S22M report portal specifications;
                    </span>
                    <br />
                    <em className="section-description--vi">
                      Bất kỳ điều khoản và điều kiện cụ thể của sản phẩm, dịch
                      vụ, và tham chiếu tới những đặc điểm của trang web truy
                      cập báo cáo S22M;
                    </em>
                  </div>
                </CRow>
              </li>
              <li className="section-list-item">
                <CRow>
                  <span className="section-bullets">d)</span>
                  <div className="section-items">
                    <span className="section-description--en">
                      These Terms and Conditions.
                    </span>
                    <br />
                    <em className="section-description--vi">
                      Những Điều Khoản và Điều Kiện này.
                    </em>
                  </div>
                </CRow>
              </li>
            </ol>

            <div className="section-description">
              <span className="section-description--en">
                In the event of any conflict among the terms of the aforesaid
                documents, the following descending order of precedence shall
                apply: - (i) the terms and conditions of the Service
                Order/Engagement Letter; (ii) the Management Agreement; (iii)
                Privacy Policy; and (iv) these Terms and Conditions.
              </span>
              <br />
              <em className="section-description--vi">
                Trong trường hợp có bất kỳ xung đột nào giữa các điều khoản của
                các tài liệu nói trên, thứ tự ưu tiên giảm dần sau đây sẽ được
                áp dụng: - (i) các điều khoản và điều kiện của Yêu Cầu Dịch Vụ/
                Thư Cam Kết; (ii) Hợp Đồng Quản Lý; (iii) Chính sách bảo mật; và
                (iv) các Điều Khoản và Điều Kiện này.
              </em>
            </div>
          </article>

          {contents.map((content) => (
            <article className="section" key={content.subtitle.numbering}>
              <h4 className="section-subtitle">
                <CRow>
                  <CCol xs={1}>{content.subtitle.numbering}</CCol>
                  <CCol xs={10} sm={11}>
                    <span className="section-subtitle--en">
                      {content.subtitle.en}
                    </span>
                    <br />
                    <em className="section-subtitle--vi">
                      {content.subtitle.vi}
                    </em>
                  </CCol>
                </CRow>
              </h4>

              {content.descriptions.map((description, index) => (
                <div
                  className="section-description"
                  key={description.numbering + index}
                >
                  <CRow>
                    <CCol xs={2} sm={1}>
                      {description.numbering}
                    </CCol>
                    <CCol xs={9} sm={11}>
                      <span
                        className="section-description--en"
                        dangerouslySetInnerHTML={{ __html: description.en }}
                      ></span>
                      <br />
                      <em
                        className="section-description--vi"
                        dangerouslySetInnerHTML={{ __html: description.vi }}
                      ></em>
                    </CCol>
                  </CRow>
                </div>
              ))}
            </article>
          ))}
        </div>
      </div>

      <div className="footer">
        <article>
          <CRow className="justify-content-between">
            <CLink href="./#/">
              <CButton
                className="terms-btn mr-xs-1 mr-md-2 mr-lg-3"
                color="primary"
              >
                Back
              </CButton>
            </CLink>

            <CButton
              className="terms-btn mr-xs-1 mr-md-2 mr-lg-3"
              color="primary"
              onClick={this.handleAgreeTerms}
              disabled={!this.state.termAgreementClickable}
            >
              Agree & Continue
            </CButton>
          </CRow>
        </article>
      </div>
    </>
  );
}
