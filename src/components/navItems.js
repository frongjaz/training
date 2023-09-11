// import * as Iconbootstrap from "react-bootstrap-icons";
import * as IconSolid from '@fortawesome/free-solid-svg-icons';

const pagesSection = [
  {
    href: "#",
    // icon: Iconbootstrap.Download,
    iconFontAwesome: IconSolid.faBalanceScale,
    title: "ประเภทเอกสาร",
  },
];
const pagesSection2 = [
  {
    href: "#",
    // icon: Iconbootstrap.Download,
    iconFontAwesome: IconSolid.faFileAlt,
    title: "การอนุมัติเอกสาร",
  },
];
const pagesSection3 = [
  {
    href: "#",
    // icon: Iconbootstrap.Download,
    iconFontAwesome: IconSolid.faFolderOpen,
    title: "เพิ่มชุดเอกสาร (ฟอร์ม)",
  },
];
const pagesSection4 = [
  {
    href: "#",
    // icon: Iconbootstrap.Download,
    iconFontAwesome: IconSolid.faCog,
    title: "ตั้งค่า",
  },
];
const pagesSection5 = [
  {
    href: "#",
    iconFontAwesome: IconSolid.faChartLine, 
    title: "รายงาน",
  },
];

const navItems = [
  {
    title: "LOGO",
    pages: [...pagesSection, ...pagesSection2, ...pagesSection3, ...pagesSection4, ...pagesSection5],
  },
];

export default navItems;
