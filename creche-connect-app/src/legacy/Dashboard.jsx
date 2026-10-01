import React, { useState, useMemo, useEffect } from 'react';

/* ------------------------------------------------------------------ */
/*  Icônes SVG inline (remplace lucide-react, aucune dépendance réseau) */
/* ------------------------------------------------------------------ */

function IconBase({
  className,
  children
}) {
  return /*#__PURE__*/React.createElement("svg", {
    className: className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, children);
}
function LayoutDashboard({
  className
}) {
  return /*#__PURE__*/React.createElement(IconBase, {
    className: className
  }, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "3",
    width: "7",
    height: "9",
    rx: "1.5"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "14",
    y: "3",
    width: "7",
    height: "5",
    rx: "1.5"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "14",
    y: "12",
    width: "7",
    height: "9",
    rx: "1.5"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "16",
    width: "7",
    height: "5",
    rx: "1.5"
  }));
}
function CalendarDays({
  className
}) {
  return /*#__PURE__*/React.createElement(IconBase, {
    className: className
  }, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "5",
    width: "18",
    height: "16",
    rx: "2"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "3",
    y1: "10",
    x2: "21",
    y2: "10"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "8",
    y1: "2",
    x2: "8",
    y2: "6"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "16",
    y1: "2",
    x2: "16",
    y2: "6"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "8",
    cy: "15",
    r: "1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "15",
    r: "1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "16",
    cy: "15",
    r: "1"
  }));
}
function CalendarCheck({
  className
}) {
  return /*#__PURE__*/React.createElement(IconBase, {
    className: className
  }, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "5",
    width: "18",
    height: "16",
    rx: "2"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "3",
    y1: "10",
    x2: "21",
    y2: "10"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "8",
    y1: "2",
    x2: "8",
    y2: "6"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "16",
    y1: "2",
    x2: "16",
    y2: "6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.5 15.5l2 2 4-4"
  }));
}
function Baby({
  className
}) {
  return /*#__PURE__*/React.createElement(IconBase, {
    className: className
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "9",
    r: "6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9 9c0 1.7 1.3 3 3 3s3-1.3 3-3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7 20c1-2 3-3 5-3s4 1 5 3"
  }));
}
function Users({
  className
}) {
  return /*#__PURE__*/React.createElement(IconBase, {
    className: className
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "9",
    cy: "8",
    r: "3.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M2.5 20c0-3.6 2.9-6.5 6.5-6.5s6.5 2.9 6.5 6.5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "18",
    cy: "9",
    r: "2.7"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15.8 13.8C18.9 14.3 21 16.7 21 20"
  }));
}
function UserPlus({
  className
}) {
  return /*#__PURE__*/React.createElement(IconBase, {
    className: className
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "9",
    cy: "8",
    r: "3.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M2.5 20c0-3.6 2.9-6.5 6.5-6.5s6.5 2.9 6.5 6.5"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "19",
    y1: "8",
    x2: "19",
    y2: "14"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "16",
    y1: "11",
    x2: "22",
    y2: "11"
  }));
}
function UserCog({
  className
}) {
  return /*#__PURE__*/React.createElement(IconBase, {
    className: className
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "9",
    cy: "8",
    r: "3.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M2.5 20c0-3.6 2.9-6.5 6.5-6.5s6.5 2.9 6.5 6.5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "19",
    cy: "12",
    r: "2.3"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "19",
    y1: "8.2",
    x2: "19",
    y2: "9.3"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "19",
    y1: "14.7",
    x2: "19",
    y2: "15.8"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "15.2",
    y1: "12",
    x2: "16.3",
    y2: "12"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "21.7",
    y1: "12",
    x2: "22.8",
    y2: "12"
  }));
}
function Settings({
  className
}) {
  return /*#__PURE__*/React.createElement(IconBase, {
    className: className
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 3v2.2M12 18.8V21M21 12h-2.2M5.2 12H3M18.4 5.6l-1.55 1.55M7.15 16.85l-1.55 1.55M18.4 18.4l-1.55-1.55M7.15 7.15L5.6 5.6"
  }));
}
function Search({
  className
}) {
  return /*#__PURE__*/React.createElement(IconBase, {
    className: className
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "10.5",
    cy: "10.5",
    r: "6.5"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "20",
    y1: "20",
    x2: "15.3",
    y2: "15.3"
  }));
}
function Bell({
  className
}) {
  return /*#__PURE__*/React.createElement(IconBase, {
    className: className
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6 9a6 6 0 0 1 12 0c0 5 2 6 2 6H4s2-1 2-6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10 20a2 2 0 0 0 4 0"
  }));
}
function Plus({
  className
}) {
  return /*#__PURE__*/React.createElement(IconBase, {
    className: className
  }, /*#__PURE__*/React.createElement("line", {
    x1: "12",
    y1: "5",
    x2: "12",
    y2: "19"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "5",
    y1: "12",
    x2: "19",
    y2: "12"
  }));
}
function Clock({
  className
}) {
  return /*#__PURE__*/React.createElement(IconBase, {
    className: className
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "9"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: "12,7 12,12 16,14"
  }));
}
function ChevronRight({
  className
}) {
  return /*#__PURE__*/React.createElement(IconBase, {
    className: className
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "9,5 16,12 9,19"
  }));
}
function ChevronLeft({
  className
}) {
  return /*#__PURE__*/React.createElement(IconBase, {
    className: className
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "15,5 8,12 15,19"
  }));
}
function X({
  className
}) {
  return /*#__PURE__*/React.createElement(IconBase, {
    className: className
  }, /*#__PURE__*/React.createElement("line", {
    x1: "5",
    y1: "5",
    x2: "19",
    y2: "19"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "19",
    y1: "5",
    x2: "5",
    y2: "19"
  }));
}
function LogOut({
  className
}) {
  return /*#__PURE__*/React.createElement(IconBase, {
    className: className
  }, /*#__PURE__*/React.createElement("path", {
    d: "M9 4H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h4"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "21",
    y1: "12",
    x2: "10",
    y2: "12"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: "16,7 21,12 16,17"
  }));
}
function Home({
  className
}) {
  return /*#__PURE__*/React.createElement(IconBase, {
    className: className
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3 11.5L12 4l9 7.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5.5 10v9a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9.5 20v-6h5v6"
  }));
}
function MessageCircle({
  className
}) {
  return /*#__PURE__*/React.createElement(IconBase, {
    className: className
  }, /*#__PURE__*/React.createElement("path", {
    d: "M21 11.5a8.5 8.5 0 1 1-3.6-6.9L21 3l-1.2 4.4c.8 1.2 1.2 2.6 1.2 4.1z"
  }));
}
function Utensils({
  className
}) {
  return /*#__PURE__*/React.createElement(IconBase, {
    className: className
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6 3v7a2 2 0 0 0 4 0V3"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "8",
    y1: "3",
    x2: "8",
    y2: "21"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17 3c-1.5 0-2.5 1.5-2.5 4s1 4 2.5 4v10"
  }));
}
function Moon({
  className
}) {
  return /*#__PURE__*/React.createElement(IconBase, {
    className: className
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20 14.5A8.5 8.5 0 1 1 9.5 4a7 7 0 0 0 10.5 10.5z"
  }));
}
function AlertCircle({
  className
}) {
  return /*#__PURE__*/React.createElement(IconBase, {
    className: className
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "9"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "12",
    y1: "7.5",
    x2: "12",
    y2: "13"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "16.5",
    r: "0.9",
    fill: "currentColor",
    stroke: "none"
  }));
}
function Check({
  className
}) {
  return /*#__PURE__*/React.createElement(IconBase, {
    className: className
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "5,13 10,18 19,7"
  }));
}
function Trash2({
  className
}) {
  return /*#__PURE__*/React.createElement(IconBase, {
    className: className
  }, /*#__PURE__*/React.createElement("line", {
    x1: "4",
    y1: "7",
    x2: "20",
    y2: "7"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6 7l1 13a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1l1-13"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9 7V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "10",
    y1: "11",
    x2: "10",
    y2: "17"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "14",
    y1: "11",
    x2: "14",
    y2: "17"
  }));
}
/* ------------------------------------------------------------------ */
/*  Mock data                                                          */
/* ------------------------------------------------------------------ */

const CRECHES = [{
  id: "lutins",
  name: "Les Petits Lutins",
  city: "Villeneuve-d'Ascq",
  address: "12 rue des Tilleuls"
}, {
  id: "maison",
  name: "La Maison des Petits",
  city: "Lille",
  address: "5 avenue Jean Jaurès"
}, {
  id: "calins",
  name: "Câlins & Sourires",
  city: "Lyon",
  address: "8 rue de la République"
}, {
  id: "explorateurs",
  name: "Les Explorateurs",
  city: "Paris",
  address: "22 rue du Faubourg Saint-Antoine"
}, {
  id: "bambins",
  name: "Bambins Malins",
  city: "Marseille",
  address: "3 boulevard Longchamp"
}];
function LoginScreen({
  creches,
  onLogin
}) {
  const [crecheId, setCrecheId] = useState(null);
  const [loginRole, setLoginRole] = useState("staff");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const handleSubmit = e => {
    e.preventDefault();
    if (!crecheId) {
      setError("Merci de sélectionner votre crèche.");
      return;
    }
    if (!firstName.trim() || !lastName.trim() || !password.trim()) {
      setError("Merci de renseigner votre nom, prénom et mot de passe.");
      return;
    }
    const creche = creches.find(c => c.id === crecheId);
    onLogin({
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      role: loginRole,
      creche
    });
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "flex min-h-screen items-center justify-center bg-slate-50 p-4 py-10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-full max-w-lg"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mb-8 flex flex-col items-center text-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white"
  }, /*#__PURE__*/React.createElement(Baby, {
    className: "h-7 w-7"
  })), /*#__PURE__*/React.createElement("h1", {
    className: "text-2xl font-bold text-slate-900"
  }, "CrècheConnect"), /*#__PURE__*/React.createElement("p", {
    className: "mt-1 text-sm text-slate-500"
  }, "Connectez-vous pour accéder à l'espace de votre crèche")), /*#__PURE__*/React.createElement("form", {
    onSubmit: handleSubmit,
    className: "space-y-6 rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "mb-2 block text-sm font-medium text-slate-900"
  }, "1. Sélectionnez votre crèche"), /*#__PURE__*/React.createElement("div", {
    className: "space-y-2"
  }, creches.map(creche => /*#__PURE__*/React.createElement("button", {
    key: creche.id,
    type: "button",
    onClick: () => setCrecheId(creche.id),
    className: `flex w-full items-center justify-between rounded-lg border px-4 py-3 text-left transition-colors ${crecheId === creche.id ? "border-blue-500 bg-blue-50" : "border-slate-200 hover:bg-slate-50"}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "min-w-0"
  }, /*#__PURE__*/React.createElement("p", {
    className: "truncate text-sm font-medium text-slate-900"
  }, creche.name), /*#__PURE__*/React.createElement("p", {
    className: "truncate text-xs text-slate-500"
  }, creche.address, ", ", creche.city)), crecheId === creche.id && /*#__PURE__*/React.createElement(Check, {
    className: "h-4 w-4 shrink-0 text-blue-600"
  }))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "mb-2 block text-sm font-medium text-slate-900"
  }, "2. Vos informations"), /*#__PURE__*/React.createElement("div", {
    className: "space-y-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-2 gap-3"
  }, /*#__PURE__*/React.createElement("input", {
    value: firstName,
    onChange: e => setFirstName(e.target.value),
    placeholder: "Prénom",
    className: "w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
  }), /*#__PURE__*/React.createElement("input", {
    value: lastName,
    onChange: e => setLastName(e.target.value),
    placeholder: "Nom",
    className: "w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
  })), /*#__PURE__*/React.createElement("input", {
    type: "password",
    value: password,
    onChange: e => setPassword(e.target.value),
    placeholder: "Mot de passe",
    className: "w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "mb-2 block text-sm font-medium text-slate-900"
  }, "3. Vous êtes..."), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-2 gap-2"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setLoginRole("staff"),
    className: `rounded-lg border px-3 py-2.5 text-sm font-medium ${loginRole === "staff" ? "border-blue-500 bg-blue-50 text-blue-700" : "border-slate-200 text-slate-900 hover:bg-slate-50"}`
  }, "Direction / Équipe"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setLoginRole("parent"),
    className: `rounded-lg border px-3 py-2.5 text-sm font-medium ${loginRole === "parent" ? "border-blue-500 bg-blue-50 text-blue-700" : "border-slate-200 text-slate-900 hover:bg-slate-50"}`
  }, "Parent"))), error && /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-red-600"
  }, error), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "w-full rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-blue-700"
  }, "Se connecter"))));
}
const STAFF_NAV_ITEMS = [{
  id: "dashboard",
  label: "Tableau de bord",
  icon: LayoutDashboard
}, {
  id: "planning",
  label: "Planning & Réunions",
  icon: CalendarDays
}, {
  id: "children",
  label: "Enfants",
  icon: Baby
}, {
  id: "team",
  label: "Équipe",
  icon: Users
}, {
  id: "calendar",
  label: "Calendrier équipe",
  icon: CalendarCheck
}, {
  id: "messages",
  label: "Discussion",
  icon: MessageCircle
}, {
  id: "settings",
  label: "Paramètres",
  icon: Settings
}];
const PARENT_NAV_ITEMS = [{
  id: "home",
  label: "Accueil",
  icon: Home
}, {
  id: "child",
  label: "Mon enfant",
  icon: Baby
}, {
  id: "planning",
  label: "Planning de la crèche",
  icon: CalendarDays
}, {
  id: "messages",
  label: "Discussion",
  icon: MessageCircle
}, {
  id: "settings",
  label: "Paramètres",
  icon: Settings
}];
const INITIAL_SECTIONS = [{
  id: "bebes",
  name: "Bébés",
  range: "2 – 12 mois",
  children: [{
    name: "Lina",
    arrival: "07h45",
    status: "Présent"
  }, {
    name: "Noah",
    arrival: "08h00",
    status: "Présent"
  }, {
    name: "Alma",
    arrival: "08h15",
    status: "Absent"
  }, {
    name: "Rayan",
    arrival: "08h30",
    status: "Présent"
  }]
}, {
  id: "moyens",
  name: "Moyens",
  range: "1 – 2 ans",
  children: [{
    name: "Léo",
    arrival: "08h00",
    status: "Présent"
  }, {
    name: "Inès",
    arrival: "08h10",
    status: "Présent"
  }, {
    name: "Sacha",
    arrival: "08h20",
    status: "Malade"
  }, {
    name: "Chloé",
    arrival: "08h30",
    status: "Présent"
  }]
}, {
  id: "grands",
  name: "Grands",
  range: "2 – 3 ans",
  children: [{
    name: "Adam",
    arrival: "08h05",
    status: "Présent"
  }, {
    name: "Manon",
    arrival: "08h15",
    status: "Présent"
  }, {
    name: "Théo",
    arrival: "08h25",
    status: "Présent"
  }, {
    name: "Zoé",
    arrival: "08h40",
    status: "Absent"
  }]
}];
const STAFF_SHIFTS = [{
  label: "Matin",
  hours: "7h – 14h",
  staff: [{
    name: "Camille Dubois",
    role: "Éducatrice"
  }, {
    name: "Hugo Martin",
    role: "Auxiliaire puériculture"
  }, {
    name: "Sarah Benali",
    role: "Éducatrice"
  }]
}, {
  label: "Journée",
  hours: "9h – 17h",
  staff: [{
    name: "Julie Petit",
    role: "Directrice adjointe"
  }, {
    name: "Karim Haddad",
    role: "Auxiliaire puériculture"
  }]
}, {
  label: "Soir",
  hours: "11h – 19h",
  staff: [{
    name: "Manon Roy",
    role: "Éducatrice"
  }, {
    name: "Léa Fontaine",
    role: "Auxiliaire puériculture"
  }, {
    name: "Yanis Cohen",
    role: "Agent polyvalent"
  }]
}];
const ALL_STAFF = STAFF_SHIFTS.flatMap(shift => shift.staff.map(p => ({
  ...p,
  defaultShift: shift.label,
  defaultHours: shift.hours.replace(/\s*–\s*/, "-")
}))).filter((p, i, arr) => arr.findIndex(x => x.name === p.name) === i);
const WEEK_DAYS = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];
function buildInitialTeamCalendar() {
  return ALL_STAFF.map(person => {
    const days = {};
    WEEK_DAYS.forEach(day => {
      days[day] = day === "Samedi" || day === "Dimanche" ? null : person.defaultHours;
    });
    return {
      name: person.name,
      role: person.role,
      days
    };
  });
}
function getTodayName() {
  // JS getDay(): 0 = Dimanche ... 6 = Samedi. WEEK_DAYS starts on Lundi.
  const jsDay = new Date().getDay();
  const index = (jsDay + 6) % 7;
  return WEEK_DAYS[index];
}

// Parse une chaîne libre du type "8h", "8h30", "08:00" en minutes depuis minuit
function parseTimeToken(token) {
  if (!token) return null;
  const t = token.trim().toLowerCase().replace(",", ".");
  let m = t.match(/^(\d{1,2})\s*[h:]\s*(\d{1,2})?$/);
  if (!m) m = t.match(/^(\d{1,2})$/);
  if (!m) return null;
  const h = parseInt(m[1], 10);
  const min = m[2] ? parseInt(m[2], 10) : 0;
  if (Number.isNaN(h) || Number.isNaN(min) || h > 23 || min > 59) return null;
  return h * 60 + min;
}

// Parse une plage horaire libre ("8h-16h", "08:00 à 16:30"...) en {start, end} minutes
function parseHoursRange(str) {
  if (!str) return null;
  const parts = str.split(/-|–|à|to/i).map(p => p.trim()).filter(Boolean);
  if (parts.length < 2) return null;
  const start = parseTimeToken(parts[0]);
  const end = parseTimeToken(parts[1]);
  if (start == null || end == null) return null;
  return {
    start,
    end
  };
}
function isOnDutyNow(hoursStr) {
  const range = parseHoursRange(hoursStr);
  if (!range) return false;
  const now = new Date();
  const nowMin = now.getHours() * 60 + now.getMinutes();
  return nowMin >= range.start && nowMin <= range.end;
}

// Construit la liste du personnel programmé pour un jour donné, triée par heure de début
function buildRosterForDay(teamCalendar, day) {
  return teamCalendar.map(person => ({
    name: person.name,
    role: person.role,
    hours: person.days[day] || "",
    onDuty: isOnDutyNow(person.days[day])
  })).filter(p => p.hours).sort((a, b) => {
    const ra = parseHoursRange(a.hours);
    const rb = parseHoursRange(b.hours);
    return (ra ? ra.start : 9999) - (rb ? rb.start : 9999);
  });
}
function isoDate(offsetDays) {
  const d = new Date();
  d.setDate(d.getDate() + offsetDays);
  return d.toISOString().slice(0, 10);
}
function buildInitialEvents() {
  return [{
    id: 1,
    title: "Réunion d'équipe",
    date: isoDate(0),
    time: "18h30",
    forParents: false
  }, {
    id: 2,
    title: "Atelier motricité - Grands",
    date: isoDate(1),
    time: "10h00",
    forParents: true
  }, {
    id: 3,
    title: "Rendez-vous parents - Alma",
    date: isoDate(4),
    time: "16h00",
    forParents: true
  }, {
    id: 4,
    title: "Fête de fin d'année",
    date: isoDate(45),
    time: "16h30",
    forParents: true
  }];
}
const EVENT_TYPES = ["Réunion", "Fête", "Sortie", "Rendez-vous", "Autre"];
function formatEventDate(dateStr) {
  const today = isoDate(0);
  const tomorrow = isoDate(1);
  if (dateStr === today) return "Aujourd'hui";
  if (dateStr === tomorrow) return "Demain";
  const d = new Date(dateStr + "T00:00:00");
  if (Number.isNaN(d.getTime())) return dateStr;
  return d.toLocaleDateString("fr-FR", {
    weekday: "long",
    day: "numeric",
    month: "long"
  });
}
const INITIAL_NOTIFICATIONS = [{
  id: 1,
  text: "Alma (Bébés) déclarée absente par sa famille",
  time: "Il y a 12 min",
  unread: true
}, {
  id: 2,
  text: "Sacha (Moyens) marqué malade par l'équipe du matin",
  time: "Il y a 40 min",
  unread: true
}, {
  id: 3,
  text: "Nouveau document ajouté au dossier de Théo",
  time: "Il y a 2 h",
  unread: true
}, {
  id: 4,
  text: "Planning de la semaine prochaine publié",
  time: "Hier",
  unread: false
}];
const PARENT_CHILD = {
  sectionId: "moyens",
  name: "Léo"
};
const INITIAL_DAILY_REPORT = {
  meals: [{
    label: "Petit-déjeuner",
    status: "Mangé"
  }, {
    label: "Déjeuner",
    status: "Partiel"
  }, {
    label: "Goûter",
    status: "À venir"
  }],
  nap: {
    start: "13h00",
    end: "14h30"
  },
  activity: "Atelier peinture et jeux d'extérieur dans le jardin."
};
const MESSAGES_STORAGE_KEY = "creche-connect-messages-v1";
const INITIAL_MESSAGES = [{
  id: 1,
  threadId: `family:${PARENT_CHILD.name}`,
  sender: "staff",
  authorName: "Camille Dubois (Éducatrice)",
  text: "Léo a très bien mangé ce midi, il a fait une sieste tranquille.",
  time: "Aujourd'hui, 13h45",
  unread: true
}, {
  id: 2,
  threadId: `family:${PARENT_CHILD.name}`,
  sender: "staff",
  authorName: "Direction",
  text: "Merci de penser à apporter une paire de chaussons de rechange.",
  time: "Hier",
  unread: false
}];
function loadInitialMessages() {
  try {
    const raw = localStorage.getItem(MESSAGES_STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch (e) {}
  return INITIAL_MESSAGES;
}
const STATUS_STYLES = {
  Présent: "bg-green-100 text-green-700",
  Absent: "bg-slate-100 text-slate-500",
  Malade: "bg-red-100 text-red-700",
  Mangé: "bg-green-100 text-green-700",
  Partiel: "bg-amber-100 text-amber-700",
  Refusé: "bg-red-100 text-red-700",
  "À venir": "bg-slate-100 text-slate-500"
};
const STATUS_CYCLE = ["Présent", "Absent", "Malade"];
const TODAY = new Date().toLocaleDateString("fr-FR", {
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric"
});

/* ------------------------------------------------------------------ */
/*  Small building blocks                                              */
/* ------------------------------------------------------------------ */

function Initials({
  name
}) {
  const initials = name.split(" ").map(p => p[0]).join("").slice(0, 2).toUpperCase();
  return /*#__PURE__*/React.createElement("div", {
    className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-50 text-sm font-semibold text-blue-600"
  }, initials);
}
function StatusBadge({
  status,
  onClick
}) {
  const clickable = typeof onClick === "function";
  const Comp = clickable ? "button" : "span";
  return /*#__PURE__*/React.createElement(Comp, {
    type: clickable ? "button" : undefined,
    onClick: onClick,
    title: clickable ? "Cliquer pour changer le statut" : undefined,
    className: `rounded-full px-2.5 py-1 text-xs font-medium ${clickable ? "transition-opacity hover:opacity-75" : ""} ${STATUS_STYLES[status] || "bg-slate-100 text-slate-500"}`
  }, status);
}
function KpiCard({
  label,
  value,
  sub
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-sm font-medium text-slate-500"
  }, label), /*#__PURE__*/React.createElement("p", {
    className: "mt-2 text-3xl font-bold text-slate-900"
  }, value), /*#__PURE__*/React.createElement("p", {
    className: "mt-1 text-sm text-slate-500"
  }, sub));
}
function ChildRow({
  child,
  onCycleStatus
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3 rounded-lg px-2 py-2 hover:bg-slate-50"
  }, /*#__PURE__*/React.createElement(Initials, {
    name: child.name
  }), /*#__PURE__*/React.createElement("div", {
    className: "min-w-0 flex-1"
  }, /*#__PURE__*/React.createElement("p", {
    className: "truncate text-sm font-medium text-slate-900"
  }, child.name), /*#__PURE__*/React.createElement("p", {
    className: "flex items-center gap-1 text-xs text-slate-500"
  }, /*#__PURE__*/React.createElement(Clock, {
    className: "h-3 w-3"
  }), "Arrivée prévue ", child.arrival)), /*#__PURE__*/React.createElement(StatusBadge, {
    status: child.status,
    onClick: onCycleStatus
  }));
}
function SectionCard({
  section,
  onCycleStatus
}) {
  const presentCount = section.children.filter(c => c.status === "Présent").length;
  return /*#__PURE__*/React.createElement("div", {
    className: "rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mb-4 flex items-baseline justify-between"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    className: "text-base font-semibold text-slate-900"
  }, section.name), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-slate-500"
  }, section.range)), /*#__PURE__*/React.createElement("p", {
    className: "text-sm font-medium text-slate-500"
  }, presentCount, "/", section.children.length)), /*#__PURE__*/React.createElement("div", {
    className: "space-y-1"
  }, section.children.map(child => /*#__PURE__*/React.createElement(ChildRow, {
    key: child.name,
    child: child,
    onCycleStatus: onCycleStatus ? () => onCycleStatus(section.id, child.name) : undefined
  }))));
}
function ShiftColumn({
  shift,
  isCurrent
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: `rounded-lg border p-4 ${isCurrent ? "border-blue-200 bg-blue-50/40" : "border-slate-200"}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "mb-3 flex items-center justify-between"
  }, /*#__PURE__*/React.createElement("p", {
    className: "flex items-center gap-2 text-sm font-semibold text-slate-900"
  }, shift.label, isCurrent && /*#__PURE__*/React.createElement("span", {
    className: "rounded-full bg-blue-100 px-2 py-0.5 text-[10px] font-medium text-blue-700"
  }, "En cours")), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-slate-500"
  }, shift.hours)), /*#__PURE__*/React.createElement("div", {
    className: "space-y-3"
  }, shift.staff.map(person => /*#__PURE__*/React.createElement("div", {
    key: person.name,
    className: "flex items-center gap-3"
  }, /*#__PURE__*/React.createElement(Initials, {
    name: person.name
  }), /*#__PURE__*/React.createElement("div", {
    className: "min-w-0"
  }, /*#__PURE__*/React.createElement("p", {
    className: "truncate text-sm font-medium text-slate-900"
  }, person.name), /*#__PURE__*/React.createElement("p", {
    className: "truncate text-xs text-slate-500"
  }, person.role))))));
}
function RosterList({
  roster
}) {
  if (roster.length === 0) {
    return /*#__PURE__*/React.createElement("div", {
      className: "rounded-xl border border-slate-200 bg-white p-6 text-sm text-slate-500 shadow-sm"
    }, "Personne n'est programmé aujourd'hui.");
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
  }, /*#__PURE__*/React.createElement("div", {
    className: "space-y-1"
  }, roster.map(person => /*#__PURE__*/React.createElement("div", {
    key: person.name,
    className: `flex items-center gap-3 rounded-lg px-2 py-2.5 ${person.onDuty ? "bg-blue-50/60" : ""}`
  }, /*#__PURE__*/React.createElement(Initials, {
    name: person.name
  }), /*#__PURE__*/React.createElement("div", {
    className: "min-w-0 flex-1"
  }, /*#__PURE__*/React.createElement("p", {
    className: "truncate text-sm font-medium text-slate-900"
  }, person.name), /*#__PURE__*/React.createElement("p", {
    className: "truncate text-xs text-slate-500"
  }, person.role)), /*#__PURE__*/React.createElement("div", {
    className: "text-right"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-sm font-semibold text-slate-900"
  }, person.hours), person.onDuty && /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] font-medium text-blue-700"
  }, "En ce moment"))))));
}

/* ------------------------------------------------------------------ */
/*  Modal: nouvel événement                                             */
/* ------------------------------------------------------------------ */

function NewEventModal({
  onClose,
  onCreate
}) {
  const [title, setTitle] = useState("");
  const [type, setType] = useState(EVENT_TYPES[0]);
  const [date, setDate] = useState(isoDate(0));
  const [time, setTime] = useState("");
  const [forParents, setForParents] = useState(false);
  const handleSubmit = e => {
    e.preventDefault();
    if (!title.trim() || !time.trim() || !date) return;
    onCreate({
      id: Date.now(),
      title: `${type} · ${title.trim()}`,
      date,
      time: time.trim(),
      forParents
    });
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 p-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-full max-w-md rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mb-4 flex items-center justify-between"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "text-base font-semibold text-slate-900"
  }, "Nouvel événement"), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    className: "rounded-lg p-1 text-slate-500 hover:bg-slate-50"
  }, /*#__PURE__*/React.createElement(X, {
    className: "h-4 w-4"
  }))), /*#__PURE__*/React.createElement("form", {
    onSubmit: handleSubmit,
    className: "space-y-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-2 gap-3"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "mb-1 block text-sm font-medium text-slate-900"
  }, "Type"), /*#__PURE__*/React.createElement("select", {
    value: type,
    onChange: e => setType(e.target.value),
    className: "w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
  }, EVENT_TYPES.map(t => /*#__PURE__*/React.createElement("option", {
    key: t,
    value: t
  }, t)))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "mb-1 block text-sm font-medium text-slate-900"
  }, "Titre"), /*#__PURE__*/React.createElement("input", {
    autoFocus: true,
    value: title,
    onChange: e => setTitle(e.target.value),
    placeholder: "Ex : Réunion d'équipe",
    className: "w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-2 gap-3"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "mb-1 block text-sm font-medium text-slate-900"
  }, "Date"), /*#__PURE__*/React.createElement("input", {
    type: "date",
    value: date,
    min: isoDate(0),
    onChange: e => setDate(e.target.value),
    className: "w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "mb-1 block text-sm font-medium text-slate-900"
  }, "Heure"), /*#__PURE__*/React.createElement("input", {
    value: time,
    onChange: e => setTime(e.target.value),
    placeholder: "18h30",
    className: "w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
  }))), /*#__PURE__*/React.createElement("label", {
    className: "flex items-center gap-2 text-sm text-slate-700"
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: forParents,
    onChange: e => setForParents(e.target.checked),
    className: "h-4 w-4 rounded border-slate-300"
  }), "Visible par les parents"), /*#__PURE__*/React.createElement("div", {
    className: "flex justify-end gap-2 pt-2"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onClose,
    className: "rounded-lg px-4 py-2 text-sm font-medium text-slate-500 hover:bg-slate-50"
  }, "Annuler"), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
  }, "Créer l'événement")))));
}

/* ------------------------------------------------------------------ */
/*  Modal : profil / bascule de rôle                                    */
/* ------------------------------------------------------------------ */

function ProfileModal({
  role,
  currentUser,
  onClose,
  onSwitchRole
}) {
  const initials = currentUser ? `${currentUser.firstName[0] || ""}${currentUser.lastName[0] || ""}`.toUpperCase() : role === "staff" ? "SM" : "CP";
  const identity = role === "staff" ? {
    initials,
    name: currentUser ? `${currentUser.firstName} ${currentUser.lastName}` : "Sophie Moreau",
    detail: "Directrice"
  } : {
    initials,
    name: currentUser ? `${currentUser.firstName} ${currentUser.lastName}` : "Camille Petit",
    detail: "Parent de Léo (section Moyens)"
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 p-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-full max-w-sm rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mb-4 flex items-center justify-between"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "text-base font-semibold text-slate-900"
  }, "Mon profil"), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    className: "rounded-lg p-1 text-slate-500 hover:bg-slate-50"
  }, /*#__PURE__*/React.createElement(X, {
    className: "h-4 w-4"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3 rounded-lg border border-slate-200 p-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-base font-semibold text-white"
  }, identity.initials), /*#__PURE__*/React.createElement("div", {
    className: "min-w-0"
  }, /*#__PURE__*/React.createElement("p", {
    className: "truncate text-sm font-semibold text-slate-900"
  }, identity.name), /*#__PURE__*/React.createElement("p", {
    className: "truncate text-xs text-slate-500"
  }, identity.detail)))));
}

/* ------------------------------------------------------------------ */
/*  Layout partagé                                                      */
/* ------------------------------------------------------------------ */

function Sidebar({
  role,
  active,
  onSelect,
  unreadMessages,
  crecheName
}) {
  const items = role === "staff" ? STAFF_NAV_ITEMS : PARENT_NAV_ITEMS;
  return /*#__PURE__*/React.createElement("aside", {
    className: "hidden w-64 shrink-0 flex-col border-r border-slate-200 bg-white px-4 py-6 md:flex"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mb-8 flex items-center gap-2 px-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white"
  }, /*#__PURE__*/React.createElement(Baby, {
    className: "h-5 w-5"
  })), /*#__PURE__*/React.createElement("span", {
    className: "truncate text-lg font-bold text-slate-900"
  }, crecheName || "CrècheConnect")), role === "parent" && /*#__PURE__*/React.createElement("p", {
    className: "mb-3 px-3 text-xs font-medium uppercase tracking-wide text-slate-400"
  }, "Espace parent"), /*#__PURE__*/React.createElement("nav", {
    className: "flex flex-1 flex-col gap-1"
  }, items.map(item => {
    const Icon = item.icon;
    const isActive = item.id === active;
    return /*#__PURE__*/React.createElement("button", {
      key: item.id,
      onClick: () => onSelect(item.id),
      className: `flex items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm font-medium transition-colors ${isActive ? "bg-blue-50 text-blue-700" : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"}`
    }, /*#__PURE__*/React.createElement(Icon, {
      className: "h-4 w-4"
    }), /*#__PURE__*/React.createElement("span", {
      className: "flex-1"
    }, item.label), item.id === "messages" && unreadMessages > 0 && /*#__PURE__*/React.createElement("span", {
      className: "flex h-5 min-w-5 items-center justify-center rounded-full bg-blue-600 px-1.5 text-[11px] font-semibold text-white"
    }, unreadMessages));
  })));
}
function Header({
  role,
  currentUser,
  crecheName,
  query,
  onQueryChange,
  searchResults,
  onPickResult,
  notifications,
  unreadCount,
  isNotifOpen,
  onToggleNotif,
  onMarkAllRead,
  isUserOpen,
  onToggleUser,
  onOpenProfile,
  onLogout
}) {
  const initials = currentUser ? `${currentUser.firstName[0] || ""}${currentUser.lastName[0] || ""}`.toUpperCase() : role === "staff" ? "SM" : "CP";
  const identity = {
    initials,
    name: currentUser ? `${currentUser.firstName} ${currentUser.lastName}` : role === "staff" ? "Sophie Moreau" : "Camille Petit",
    detail: role === "staff" ? "Direction / Équipe" : "Parent"
  };
  return /*#__PURE__*/React.createElement("header", {
    className: "flex items-center gap-4 border-b border-slate-200 bg-white px-4 py-4 md:px-8"
  }, role === "staff" ? /*#__PURE__*/React.createElement("div", {
    className: "relative flex-1 max-w-md"
  }, /*#__PURE__*/React.createElement(Search, {
    className: "pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
  }), /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: query,
    onChange: e => onQueryChange(e.target.value),
    placeholder: "Rechercher un enfant, un membre de l'équipe…",
    className: "w-full rounded-lg border border-slate-200 bg-slate-50 py-2 pl-9 pr-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
  }), query.trim() !== "" && /*#__PURE__*/React.createElement("div", {
    className: "absolute left-0 right-0 top-full z-40 mt-2 max-h-72 overflow-y-auto rounded-lg border border-slate-200 bg-white p-2 shadow-sm"
  }, searchResults.length === 0 ? /*#__PURE__*/React.createElement("p", {
    className: "px-2 py-3 text-sm text-slate-500"
  }, "Aucun résultat pour « ", query, " »") : searchResults.map(r => /*#__PURE__*/React.createElement("button", {
    key: `${r.kind}-${r.name}`,
    onClick: () => onPickResult(r),
    className: "flex w-full items-center gap-3 rounded-lg px-2 py-2 text-left hover:bg-slate-50"
  }, /*#__PURE__*/React.createElement(Initials, {
    name: r.name
  }), /*#__PURE__*/React.createElement("div", {
    className: "min-w-0"
  }, /*#__PURE__*/React.createElement("p", {
    className: "truncate text-sm font-medium text-slate-900"
  }, r.name), /*#__PURE__*/React.createElement("p", {
    className: "truncate text-xs text-slate-500"
  }, r.kind === "child" ? `Enfant · ${r.detail}` : `Équipe · ${r.detail}`)))))) : /*#__PURE__*/React.createElement("div", {
    className: "flex-1"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-sm font-semibold text-slate-900"
  }, "Espace Parent · ", crecheName)), /*#__PURE__*/React.createElement("div", {
    className: "relative"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onToggleNotif,
    className: "relative rounded-lg p-2 text-slate-500 hover:bg-slate-50"
  }, /*#__PURE__*/React.createElement(Bell, {
    className: "h-5 w-5"
  }), unreadCount > 0 && /*#__PURE__*/React.createElement("span", {
    className: "absolute right-1 top-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-semibold text-white"
  }, unreadCount)), isNotifOpen && /*#__PURE__*/React.createElement("div", {
    className: "absolute right-0 top-full z-40 mt-2 w-80 rounded-lg border border-slate-200 bg-white p-2 shadow-sm"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between px-2 py-1.5"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-sm font-semibold text-slate-900"
  }, "Notifications"), /*#__PURE__*/React.createElement("button", {
    onClick: onMarkAllRead,
    className: "text-xs font-medium text-blue-600 hover:text-blue-700"
  }, "Tout marquer comme lu")), /*#__PURE__*/React.createElement("div", {
    className: "max-h-72 overflow-y-auto"
  }, notifications.map(n => /*#__PURE__*/React.createElement("div", {
    key: n.id,
    className: "flex items-start gap-2 rounded-lg px-2 py-2 hover:bg-slate-50"
  }, /*#__PURE__*/React.createElement("span", {
    className: `mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${n.unread ? "bg-blue-600" : "bg-transparent"}`
  }), /*#__PURE__*/React.createElement("div", {
    className: "min-w-0"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-slate-900"
  }, n.text), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-slate-500"
  }, n.time))))))), /*#__PURE__*/React.createElement("div", {
    className: "relative border-l border-slate-200 pl-4"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onToggleUser,
    className: "flex items-center gap-3 rounded-lg py-1 pr-1 hover:bg-slate-50"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-sm font-semibold text-white"
  }, identity.initials), /*#__PURE__*/React.createElement("div", {
    className: "hidden text-left sm:block"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-sm font-medium text-slate-900"
  }, identity.name), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-slate-500"
  }, identity.detail))), isUserOpen && /*#__PURE__*/React.createElement("div", {
    className: "absolute right-0 top-full z-40 mt-2 w-48 rounded-lg border border-slate-200 bg-white p-1.5 shadow-sm"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onOpenProfile,
    className: "flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-sm text-slate-900 hover:bg-slate-50"
  }, /*#__PURE__*/React.createElement(UserCog, {
    className: "h-4 w-4 text-slate-500"
  }), "Mon profil"), /*#__PURE__*/React.createElement("button", {
    onClick: onLogout,
    className: "flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-sm text-red-600 hover:bg-red-50"
  }, /*#__PURE__*/React.createElement(LogOut, {
    className: "h-4 w-4"
  }), "Déconnexion"))));
}

/* ------------------------------------------------------------------ */
/*  Vues Équipe / Direction                                             */
/* ------------------------------------------------------------------ */

function DashboardView({
  sections,
  onCycleStatus,
  events,
  capacity,
  onOpenNewEvent,
  onGoToChildren,
  roster,
  firstName
}) {
  const allChildren = sections.flatMap(s => s.children);
  const presentCount = allChildren.filter(c => c.status === "Présent").length;
  const totalChildren = allChildren.length;
  const occupancy = Math.round(presentCount / capacity * 100);
  const staffOnDuty = roster.filter(p => p.onDuty).length;
  const nextEvent = [...events].sort((a, b) => (a.date + a.time).localeCompare(b.date + b.time))[0];
  const kpis = [{
    label: "Enfants présents",
    value: `${presentCount}/${capacity}`,
    sub: `${totalChildren - presentCount} absences aujourd'hui`
  }, {
    label: "Taux d'occupation",
    value: `${occupancy}%`,
    sub: "Mis à jour en direct"
  }, {
    label: "Personnel en service",
    value: `${staffOnDuty}`,
    sub: "En ce moment"
  }, {
    label: "Prochaine réunion",
    value: nextEvent ? nextEvent.time : "—",
    sub: nextEvent ? nextEvent.title : "Aucun événement prévu"
  }];
  return /*#__PURE__*/React.createElement("div", {
    className: "space-y-6 p-4 md:p-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    className: "text-2xl font-bold text-slate-900"
  }, "Bonjour, ", firstName || "Sophie"), /*#__PURE__*/React.createElement("p", {
    className: "mt-1 text-sm capitalize text-slate-500"
  }, TODAY)), /*#__PURE__*/React.createElement("button", {
    onClick: onOpenNewEvent,
    className: "flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-blue-700"
  }, /*#__PURE__*/React.createElement(Plus, {
    className: "h-4 w-4"
  }), "Nouvel événement")), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
  }, kpis.map(kpi => /*#__PURE__*/React.createElement(KpiCard, {
    key: kpi.label,
    ...kpi
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "mb-4 flex items-center justify-between"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-lg font-semibold text-slate-900"
  }, "Présences par section"), /*#__PURE__*/React.createElement("button", {
    onClick: onGoToChildren,
    className: "flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-700"
  }, "Voir tout", /*#__PURE__*/React.createElement(ChevronRight, {
    className: "h-4 w-4"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 gap-6 lg:grid-cols-3"
  }, sections.map(section => /*#__PURE__*/React.createElement(SectionCard, {
    key: section.id,
    section: section,
    onCycleStatus: onCycleStatus
  })))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    className: "mb-4 text-lg font-semibold text-slate-900"
  }, "Équipe du jour"), /*#__PURE__*/React.createElement(RosterList, {
    roster: roster
  })));
}
function ChildrenView({
  sections,
  onCycleStatus
}) {
  const [filter, setFilter] = useState("Tous");
  const filters = ["Tous", "Présent", "Absent", "Malade"];
  return /*#__PURE__*/React.createElement("div", {
    className: "space-y-6 p-4 md:p-8"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    className: "text-2xl font-bold text-slate-900"
  }, "Enfants"), /*#__PURE__*/React.createElement("p", {
    className: "mt-1 text-sm text-slate-500"
  }, "Toutes les sections, statut modifiable en un clic")), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap gap-2"
  }, filters.map(f => /*#__PURE__*/React.createElement("button", {
    key: f,
    onClick: () => setFilter(f),
    className: `rounded-full px-3 py-1.5 text-sm font-medium ${filter === f ? "bg-blue-600 text-white" : "bg-white text-slate-500 border border-slate-200 hover:bg-slate-50"}`
  }, f))), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 gap-6 lg:grid-cols-3"
  }, sections.map(section => {
    const filtered = filter === "Tous" ? section.children : section.children.filter(c => c.status === filter);
    if (filtered.length === 0) return null;
    return /*#__PURE__*/React.createElement(SectionCard, {
      key: section.id,
      section: {
        ...section,
        children: filtered
      },
      onCycleStatus: onCycleStatus
    });
  })));
}
function TeamView({
  roster,
  teamCalendar,
  onGoToCalendar
}) {
  const totalMembers = teamCalendar.length;
  return /*#__PURE__*/React.createElement("div", {
    className: "space-y-6 p-4 md:p-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    className: "text-2xl font-bold text-slate-900"
  }, "Équipe"), /*#__PURE__*/React.createElement("p", {
    className: "mt-1 text-sm text-slate-500"
  }, "Planning du jour, ", totalMembers, " membre", totalMembers > 1 ? "s" : "", " au total")), /*#__PURE__*/React.createElement("button", {
    onClick: onGoToCalendar,
    className: "flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-blue-700"
  }, /*#__PURE__*/React.createElement(UserPlus, {
    className: "h-4 w-4"
  }), "Gérer l'équipe")), /*#__PURE__*/React.createElement(RosterList, {
    roster: roster
  }));
}
function TeamCalendarView({
  teamCalendar,
  onSetHours,
  onRemovePerson,
  onAddPerson
}) {
  const [newName, setNewName] = useState("");
  const [newRole, setNewRole] = useState("");
  const [error, setError] = useState("");
  const handleAdd = e => {
    e.preventDefault();
    const name = newName.trim();
    const role = newRole.trim();
    if (!name) {
      setError("Indique au moins un nom pour ajouter la personne.");
      return;
    }
    onAddPerson(name, role || "Membre de l'équipe");
    setNewName("");
    setNewRole("");
    setError("");
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "space-y-6 p-4 md:p-8"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    className: "text-2xl font-bold text-slate-900"
  }, "Calendrier équipe"), /*#__PURE__*/React.createElement("p", {
    className: "mt-1 text-sm text-slate-500"
  }, "Chaque personne (ou la direction) indique ses horaires jour par jour")), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-slate-500"
  }, "Cliquez dans une case et saisissez l'horaire du jour (ex : ", /*#__PURE__*/React.createElement("span", {
    className: "font-medium"
  }, "8h-16h"), "). Laissez la case vide pour un jour de repos."), /*#__PURE__*/React.createElement("div", {
    className: "overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm"
  }, /*#__PURE__*/React.createElement("table", {
    className: "w-full min-w-[720px] border-collapse text-sm"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
    className: "border-b border-slate-200"
  }, /*#__PURE__*/React.createElement("th", {
    className: "sticky left-0 z-10 bg-white px-4 py-3 text-left font-medium text-slate-500"
  }, "Membre de l'équipe"), WEEK_DAYS.map(day => /*#__PURE__*/React.createElement("th", {
    key: day,
    className: "px-2 py-3 text-center font-medium text-slate-500"
  }, day.slice(0, 3))), /*#__PURE__*/React.createElement("th", {
    className: "px-2 py-3"
  }))), /*#__PURE__*/React.createElement("tbody", null, teamCalendar.map(person => /*#__PURE__*/React.createElement("tr", {
    key: person.name,
    className: "group border-b border-slate-100 last:border-0"
  }, /*#__PURE__*/React.createElement("td", {
    className: "sticky left-0 z-10 bg-white px-4 py-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3"
  }, /*#__PURE__*/React.createElement(Initials, {
    name: person.name
  }), /*#__PURE__*/React.createElement("div", {
    className: "min-w-0"
  }, /*#__PURE__*/React.createElement("p", {
    className: "truncate text-sm font-medium text-slate-900"
  }, person.name), /*#__PURE__*/React.createElement("p", {
    className: "truncate text-xs text-slate-500"
  }, person.role)))), WEEK_DAYS.map(day => /*#__PURE__*/React.createElement("td", {
    key: day,
    className: "px-2 py-3 text-center"
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: person.days[day] || "",
    onChange: e => onSetHours(person.name, day, e.target.value),
    placeholder: "Repos",
    title: "Indiquer l'horaire (ex : 8h-16h), vide = repos",
    className: "w-full min-w-[5.5rem] rounded-lg border border-slate-200 bg-white px-2 py-1.5 text-center text-xs font-medium text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
  }))), /*#__PURE__*/React.createElement("td", {
    className: "px-2 py-3 text-center"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => onRemovePerson(person.name),
    className: "rounded-md p-1.5 text-slate-300 opacity-0 hover:bg-red-50 hover:text-red-600 group-hover:opacity-100",
    title: "Retirer de l'équipe"
  }, /*#__PURE__*/React.createElement(Trash2, {
    className: "h-4 w-4"
  })))))))), /*#__PURE__*/React.createElement("form", {
    onSubmit: handleAdd,
    className: "flex flex-col gap-3 rounded-xl border border-dashed border-slate-200 bg-white p-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col gap-3 sm:flex-row sm:items-center"
  }, /*#__PURE__*/React.createElement(UserPlus, {
    className: "hidden h-5 w-5 shrink-0 text-slate-400 sm:block"
  }), /*#__PURE__*/React.createElement("input", {
    value: newName,
    onChange: e => setNewName(e.target.value),
    placeholder: "Nom complet (obligatoire)",
    className: "flex-1 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
  }), /*#__PURE__*/React.createElement("input", {
    value: newRole,
    onChange: e => setNewRole(e.target.value),
    placeholder: "Poste (ex : Éducatrice)",
    className: "flex-1 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
  }), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "flex items-center justify-center gap-2 whitespace-nowrap rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-blue-700"
  }, /*#__PURE__*/React.createElement(Plus, {
    className: "h-4 w-4"
  }), "Ajouter à l'équipe")), error && /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-red-600"
  }, error)));
}
function StaffPlanningView({
  events,
  onOpenNewEvent,
  onRemoveEvent
}) {
  const sorted = [...events].sort((a, b) => (a.date + a.time).localeCompare(b.date + b.time));
  return /*#__PURE__*/React.createElement("div", {
    className: "space-y-6 p-4 md:p-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    className: "text-2xl font-bold text-slate-900"
  }, "Planning & Réunions"), /*#__PURE__*/React.createElement("p", {
    className: "mt-1 text-sm text-slate-500"
  }, events.length, " événement", events.length > 1 ? "s" : "", " à venir")), /*#__PURE__*/React.createElement("button", {
    onClick: onOpenNewEvent,
    className: "flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-blue-700"
  }, /*#__PURE__*/React.createElement(Plus, {
    className: "h-4 w-4"
  }), "Nouvel événement")), /*#__PURE__*/React.createElement("div", {
    className: "rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
  }, sorted.length === 0 ? /*#__PURE__*/React.createElement("p", {
    className: "py-4 text-sm text-slate-500"
  }, "Aucun événement à venir.") : /*#__PURE__*/React.createElement("div", {
    className: "divide-y divide-slate-100"
  }, sorted.map(ev => /*#__PURE__*/React.createElement("div", {
    key: ev.id,
    className: "group flex items-center gap-4 py-3 first:pt-0 last:pb-0"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600"
  }, /*#__PURE__*/React.createElement(CalendarDays, {
    className: "h-5 w-5"
  })), /*#__PURE__*/React.createElement("div", {
    className: "min-w-0 flex-1"
  }, /*#__PURE__*/React.createElement("p", {
    className: "truncate text-sm font-medium text-slate-900"
  }, ev.title), /*#__PURE__*/React.createElement("p", {
    className: "text-xs capitalize text-slate-500"
  }, formatEventDate(ev.date))), /*#__PURE__*/React.createElement("p", {
    className: "text-sm font-semibold text-slate-900"
  }, ev.time), /*#__PURE__*/React.createElement("button", {
    onClick: () => onRemoveEvent(ev.id),
    title: "Retirer l'événement",
    className: "rounded-md p-1.5 text-slate-300 opacity-0 hover:bg-red-50 hover:text-red-600 group-hover:opacity-100"
  }, /*#__PURE__*/React.createElement(Trash2, {
    className: "h-4 w-4"
  })))))));
}
function SettingsView({
  role,
  capacity,
  onSaveCapacity,
  crecheName
}) {
  const [capacityInput, setCapacityInput] = useState(String(capacity));
  const [saved, setSaved] = useState(false);
  useEffect(() => {
    setCapacityInput(String(capacity));
  }, [capacity]);
  const handleSave = () => {
    if (role !== "staff") return;
    const n = parseInt(capacityInput, 10);
    if (Number.isNaN(n) || n <= 0) return;
    onSaveCapacity(n);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "space-y-6 p-4 md:p-8"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    className: "text-2xl font-bold text-slate-900"
  }, "Paramètres"), /*#__PURE__*/React.createElement("p", {
    className: "mt-1 text-sm text-slate-500"
  }, role === "staff" ? "Informations générales de la crèche" : "Vos informations de contact")), /*#__PURE__*/React.createElement("div", {
    className: "max-w-lg rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
  }, /*#__PURE__*/React.createElement("div", {
    className: "space-y-4"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "mb-1 block text-sm font-medium text-slate-900"
  }, role === "staff" ? "Nom de la structure" : "Nom complet"), /*#__PURE__*/React.createElement("input", {
    defaultValue: role === "staff" ? crecheName || "CrècheConnect" : "Camille Petit",
    className: "w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "mb-1 block text-sm font-medium text-slate-900"
  }, role === "staff" ? "Capacité d'accueil" : "Téléphone"), role === "staff" ? /*#__PURE__*/React.createElement("input", {
    type: "number",
    min: "1",
    value: capacityInput,
    onChange: e => setCapacityInput(e.target.value),
    className: "w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
  }) : /*#__PURE__*/React.createElement("input", {
    defaultValue: "06 12 34 56 78",
    className: "w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
  }), role === "staff" && /*#__PURE__*/React.createElement("p", {
    className: "mt-1 text-xs text-slate-500"
  }, "Utilisée pour calculer le taux d'occupation du tableau de bord.")), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: handleSave,
    className: "rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-blue-700"
  }, "Enregistrer"), saved && /*#__PURE__*/React.createElement("span", {
    className: "flex items-center gap-1 text-sm font-medium text-green-600"
  }, /*#__PURE__*/React.createElement(Check, {
    className: "h-4 w-4"
  }), "Enregistré")))));
}

/* ------------------------------------------------------------------ */
/*  Vues Parent                                                         */
/* ------------------------------------------------------------------ */

function ParentHomeView({
  child,
  section,
  onToggleAbsence,
  dailyReport,
  upcomingEvent,
  onGoToMessages,
  unreadMessages,
  firstName
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "space-y-6 p-4 md:p-8"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    className: "text-2xl font-bold text-slate-900"
  }, "Bonjour, ", firstName || "Camille"), /*#__PURE__*/React.createElement("p", {
    className: "mt-1 text-sm capitalize text-slate-500"
  }, TODAY)), /*#__PURE__*/React.createElement("div", {
    className: "rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap items-center justify-between gap-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-4"
  }, /*#__PURE__*/React.createElement(Initials, {
    name: child.name
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "text-base font-semibold text-slate-900"
  }, child.name), /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-slate-500"
  }, "Section ", section.name, " · Arrivée prévue ", child.arrival))), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3"
  }, /*#__PURE__*/React.createElement(StatusBadge, {
    status: child.status
  }), /*#__PURE__*/React.createElement("button", {
    onClick: onToggleAbsence,
    className: "rounded-lg border border-slate-200 px-3 py-2 text-sm font-medium text-slate-900 hover:bg-slate-50"
  }, child.status === "Absent" ? "Annuler l'absence" : "Signaler une absence")))), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 gap-6 lg:grid-cols-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "mb-4 text-lg font-semibold text-slate-900"
  }, "Rapport du jour"), /*#__PURE__*/React.createElement("div", {
    className: "space-y-3"
  }, dailyReport.meals.map(m => /*#__PURE__*/React.createElement("div", {
    key: m.label,
    className: "flex items-center justify-between"
  }, /*#__PURE__*/React.createElement("p", {
    className: "flex items-center gap-2 text-sm text-slate-900"
  }, /*#__PURE__*/React.createElement(Utensils, {
    className: "h-4 w-4 text-slate-400"
  }), m.label), /*#__PURE__*/React.createElement(StatusBadge, {
    status: m.status
  }))), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between border-t border-slate-100 pt-3"
  }, /*#__PURE__*/React.createElement("p", {
    className: "flex items-center gap-2 text-sm text-slate-900"
  }, /*#__PURE__*/React.createElement(Moon, {
    className: "h-4 w-4 text-slate-400"
  }), "Sieste"), /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-slate-500"
  }, dailyReport.nap.start, " – ", dailyReport.nap.end))), /*#__PURE__*/React.createElement("p", {
    className: "mt-4 rounded-lg bg-slate-50 p-3 text-sm text-slate-500"
  }, dailyReport.activity)), /*#__PURE__*/React.createElement("div", {
    className: "rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mb-4 flex items-center justify-between"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-lg font-semibold text-slate-900"
  }, "Messages de l'équipe"), /*#__PURE__*/React.createElement("button", {
    onClick: onGoToMessages,
    className: "flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-700"
  }, "Voir tout", /*#__PURE__*/React.createElement(ChevronRight, {
    className: "h-4 w-4"
  }))), unreadMessages > 0 && /*#__PURE__*/React.createElement("p", {
    className: "mb-3 flex items-center gap-2 rounded-lg bg-blue-50 px-3 py-2 text-sm text-blue-700"
  }, /*#__PURE__*/React.createElement(AlertCircle, {
    className: "h-4 w-4"
  }), unreadMessages, " nouveau", unreadMessages > 1 ? "x" : "", " message", unreadMessages > 1 ? "s" : ""), upcomingEvent && /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3 rounded-lg border border-slate-200 p-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600"
  }, /*#__PURE__*/React.createElement(CalendarDays, {
    className: "h-5 w-5"
  })), /*#__PURE__*/React.createElement("div", {
    className: "min-w-0"
  }, /*#__PURE__*/React.createElement("p", {
    className: "truncate text-sm font-medium text-slate-900"
  }, upcomingEvent.title), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-slate-500"
  }, upcomingEvent.date, " · ", upcomingEvent.time))))));
}
function ParentChildView({
  child,
  section,
  onToggleAbsence,
  dailyReport
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "space-y-6 p-4 md:p-8"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    className: "text-2xl font-bold text-slate-900"
  }, "Mon enfant"), /*#__PURE__*/React.createElement("p", {
    className: "mt-1 text-sm text-slate-500"
  }, "Fiche de ", child.name)), /*#__PURE__*/React.createElement("div", {
    className: "rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap items-center justify-between gap-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-4"
  }, /*#__PURE__*/React.createElement(Initials, {
    name: child.name
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "text-base font-semibold text-slate-900"
  }, child.name), /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-slate-500"
  }, "Section ", section.name, " (", section.range, ")"))), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3"
  }, /*#__PURE__*/React.createElement(StatusBadge, {
    status: child.status
  }), /*#__PURE__*/React.createElement("button", {
    onClick: onToggleAbsence,
    className: "rounded-lg border border-slate-200 px-3 py-2 text-sm font-medium text-slate-900 hover:bg-slate-50"
  }, child.status === "Absent" ? "Annuler l'absence" : "Signaler une absence")))), /*#__PURE__*/React.createElement("div", {
    className: "rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "mb-4 text-lg font-semibold text-slate-900"
  }, "Historique du jour"), /*#__PURE__*/React.createElement("div", {
    className: "space-y-3"
  }, dailyReport.meals.map(m => /*#__PURE__*/React.createElement("div", {
    key: m.label,
    className: "flex items-center justify-between"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-slate-900"
  }, m.label), /*#__PURE__*/React.createElement(StatusBadge, {
    status: m.status
  }))), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between border-t border-slate-100 pt-3"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-slate-900"
  }, "Sieste"), /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-slate-500"
  }, dailyReport.nap.start, " – ", dailyReport.nap.end)))));
}
function ParentPlanningView({
  events,
  rsvps,
  onToggleRsvp
}) {
  const parentEvents = events.filter(ev => ev.forParents).sort((a, b) => (a.date + a.time).localeCompare(b.date + b.time));
  return /*#__PURE__*/React.createElement("div", {
    className: "space-y-6 p-4 md:p-8"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    className: "text-2xl font-bold text-slate-900"
  }, "Planning de la crèche"), /*#__PURE__*/React.createElement("p", {
    className: "mt-1 text-sm text-slate-500"
  }, "Événements ouverts aux familles")), /*#__PURE__*/React.createElement("div", {
    className: "rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
  }, parentEvents.length === 0 ? /*#__PURE__*/React.createElement("p", {
    className: "py-4 text-sm text-slate-500"
  }, "Aucun événement à venir pour le moment.") : /*#__PURE__*/React.createElement("div", {
    className: "divide-y divide-slate-100"
  }, parentEvents.map(ev => {
    const confirmed = !!rsvps[ev.id];
    return /*#__PURE__*/React.createElement("div", {
      key: ev.id,
      className: "flex items-center gap-4 py-3 first:pt-0 last:pb-0"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600"
    }, /*#__PURE__*/React.createElement(CalendarDays, {
      className: "h-5 w-5"
    })), /*#__PURE__*/React.createElement("div", {
      className: "min-w-0 flex-1"
    }, /*#__PURE__*/React.createElement("p", {
      className: "truncate text-sm font-medium text-slate-900"
    }, ev.title), /*#__PURE__*/React.createElement("p", {
      className: "text-xs capitalize text-slate-500"
    }, formatEventDate(ev.date), " · ", ev.time)), /*#__PURE__*/React.createElement("button", {
      onClick: () => onToggleRsvp(ev.id),
      className: `rounded-lg px-3 py-1.5 text-xs font-medium ${confirmed ? "bg-green-100 text-green-700" : "border border-slate-200 text-slate-900 hover:bg-slate-50"}`
    }, confirmed ? "Présence confirmée" : "Je viendrai"));
  }))));
}
function ContactRow({
  contact,
  isActive,
  unread,
  onSelect
}) {
  return /*#__PURE__*/React.createElement("button", {
    onClick: () => onSelect(contact.id),
    className: `flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left transition-colors ${isActive ? "bg-blue-50" : "hover:bg-slate-50"}`
  }, /*#__PURE__*/React.createElement(Initials, {
    name: contact.name
  }), /*#__PURE__*/React.createElement("div", {
    className: "min-w-0 flex-1"
  }, /*#__PURE__*/React.createElement("p", {
    className: `truncate text-sm font-medium ${isActive ? "text-blue-700" : "text-slate-900"}`
  }, contact.name), /*#__PURE__*/React.createElement("p", {
    className: "truncate text-xs text-slate-500"
  }, contact.sub)), unread > 0 && /*#__PURE__*/React.createElement("span", {
    className: "flex h-5 min-w-5 shrink-0 items-center justify-center rounded-full bg-blue-600 px-1.5 text-[11px] font-semibold text-white"
  }, unread));
}
function ConversationView({
  viewerRole,
  title,
  subtitle,
  messages,
  onSend,
  onMarkRead,
  contactGroups,
  selectedThreadId,
  onSelectThread,
  unreadByThread
}) {
  const [draft, setDraft] = useState("");
  const bottomRef = React.useRef(null);
  const threadMessages = selectedThreadId ? messages.filter(m => m.threadId === selectedThreadId) : messages;
  useEffect(() => {
    if (bottomRef.current && typeof bottomRef.current.scrollIntoView === "function") {
      bottomRef.current.scrollIntoView({
        block: "nearest"
      });
    }
  }, [threadMessages.length, selectedThreadId]);
  const otherUnread = threadMessages.filter(m => m.sender !== viewerRole && m.unread).length;
  const handleSend = e => {
    e.preventDefault();
    const text = draft.trim();
    if (!text) return;
    onSend(text);
    setDraft("");
  };
  const chatPanel = /*#__PURE__*/React.createElement("div", {
    className: "flex h-full min-w-0 flex-1 flex-col space-y-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between"
  }, /*#__PURE__*/React.createElement("div", {
    className: "min-w-0"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "truncate text-xl font-bold text-slate-900"
  }, title), /*#__PURE__*/React.createElement("p", {
    className: "truncate text-sm text-slate-500"
  }, subtitle)), otherUnread > 0 && /*#__PURE__*/React.createElement("button", {
    onClick: onMarkRead,
    className: "shrink-0 text-sm font-medium text-blue-600 hover:text-blue-700"
  }, "Tout marquer comme lu")), /*#__PURE__*/React.createElement("div", {
    className: "flex-1 space-y-3 overflow-y-auto rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
  }, threadMessages.length === 0 ? /*#__PURE__*/React.createElement("p", {
    className: "py-6 text-center text-sm text-slate-500"
  }, "Aucun message pour le moment. Écrivez le premier ci-dessous.") : threadMessages.map(m => {
    const isMine = m.sender === viewerRole;
    return /*#__PURE__*/React.createElement("div", {
      key: m.id,
      className: `flex ${isMine ? "justify-end" : "justify-start"}`
    }, /*#__PURE__*/React.createElement("div", {
      className: `max-w-[80%] rounded-xl px-4 py-2.5 ${isMine ? "bg-blue-600 text-white" : "border border-slate-200 bg-slate-50 text-slate-900"}`
    }, !isMine && /*#__PURE__*/React.createElement("p", {
      className: "text-xs font-semibold text-slate-500"
    }, m.authorName), /*#__PURE__*/React.createElement("p", {
      className: `text-sm ${isMine ? "text-white" : "text-slate-900"}`
    }, m.text), /*#__PURE__*/React.createElement("p", {
      className: `mt-1 text-[11px] ${isMine ? "text-blue-100" : "text-slate-400"}`
    }, m.time)));
  }), /*#__PURE__*/React.createElement("div", {
    ref: bottomRef
  })), /*#__PURE__*/React.createElement("form", {
    onSubmit: handleSend,
    className: "flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("input", {
    value: draft,
    onChange: e => setDraft(e.target.value),
    placeholder: "Écrire un message...",
    className: "flex-1 rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
  }), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-blue-700"
  }, "Envoyer")));
  if (!contactGroups) {
    return /*#__PURE__*/React.createElement("div", {
      className: "flex h-full flex-col p-4 md:p-8"
    }, chatPanel);
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "flex h-full flex-col gap-6 p-4 md:flex-row md:p-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex w-full shrink-0 flex-col rounded-xl border border-slate-200 bg-white shadow-sm md:w-72"
  }, /*#__PURE__*/React.createElement("div", {
    className: "border-b border-slate-100 px-4 py-3"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-sm font-semibold text-slate-900"
  }, "Contacts")), /*#__PURE__*/React.createElement("div", {
    className: "max-h-72 space-y-4 overflow-y-auto p-2 md:max-h-none md:flex-1"
  }, contactGroups.map(group => /*#__PURE__*/React.createElement("div", {
    key: group.label
  }, /*#__PURE__*/React.createElement("p", {
    className: "px-3 pb-1 pt-2 text-xs font-medium uppercase tracking-wide text-slate-400"
  }, group.label), /*#__PURE__*/React.createElement("div", {
    className: "space-y-0.5"
  }, group.items.map(contact => /*#__PURE__*/React.createElement(ContactRow, {
    key: contact.id,
    contact: contact,
    isActive: contact.id === selectedThreadId,
    unread: unreadByThread[contact.id] || 0,
    onSelect: onSelectThread
  }))))))), chatPanel);
}

/* ------------------------------------------------------------------ */
/*  App shell                                                           */
/* ------------------------------------------------------------------ */

function CrecheConnectDashboard({ authUser, onSignOut }) {
  const [screen, setScreen] = useState("app");
  const [currentUser, setCurrentUser] = useState(authUser.currentUser);
  const [creche, setCreche] = useState(authUser.creche);
  const [role, setRole] = useState(authUser.role);
  const [active, setActive] = useState(authUser.role === "parent" ? "home" : "dashboard");
  const [sections, setSections] = useState(INITIAL_SECTIONS);
  const [events, setEvents] = useState(buildInitialEvents);
  const [notifications, setNotifications] = useState(INITIAL_NOTIFICATIONS);
  const [messages, setMessages] = useState(loadInitialMessages);
  const [capacity, setCapacity] = useState(40);
  const [rsvps, setRsvps] = useState({});
  const [query, setQuery] = useState("");
  const [isNotifOpen, setNotifOpen] = useState(false);
  const [isUserOpen, setUserOpen] = useState(false);
  const [isEventModalOpen, setEventModalOpen] = useState(false);
  const [isProfileOpen, setProfileOpen] = useState(false);
  const [teamCalendar, setTeamCalendar] = useState(buildInitialTeamCalendar);
  const [staffThreadId, setStaffThreadId] = useState(`family:${PARENT_CHILD.name}`);
  const [, forceTick] = useState(0);
  useEffect(() => {
    const id = setInterval(() => forceTick(t => t + 1), 60000);
    return () => clearInterval(id);
  }, []);

  // Persiste les conversations pour qu'elles survivent à un rechargement de page
  useEffect(() => {
    try {
      localStorage.setItem(MESSAGES_STORAGE_KEY, JSON.stringify(messages));
    } catch (e) {}
  }, [messages]);
  const today = isoDate(0);
  const visibleEvents = useMemo(() => events.filter(ev => ev.date >= today), [events, today]);
  const familyContacts = useMemo(() => sections.flatMap(section => section.children.map(child => ({
    id: `family:${child.name}`,
    kind: "family",
    name: `Famille ${child.name}`,
    sub: `Section ${section.name}`
  }))), [sections]);
  const staffContacts = useMemo(() => teamCalendar.map(person => ({
    id: `staffchat:${person.name}`,
    kind: "staff",
    name: person.name,
    sub: person.role
  })), [teamCalendar]);
  const staffContactGroups = [{
    label: "Familles",
    items: familyContacts
  }, {
    label: "Personnel",
    items: staffContacts
  }];
  const unreadByThread = useMemo(() => {
    const map = {};
    messages.forEach(m => {
      if (!m.unread) return;
      const isColleagueMsg = m.sender === "colleague";
      const isParentMsg = m.sender === "parent";
      if (isColleagueMsg || isParentMsg) {
        map[m.threadId] = (map[m.threadId] || 0) + 1;
      }
    });
    return map;
  }, [messages]);
  const unreadCount = notifications.filter(n => n.unread).length;
  const familyThreadId = `family:${PARENT_CHILD.name}`;
  const unreadMessagesForParent = messages.filter(m => m.threadId === familyThreadId && m.sender === "staff" && m.unread).length;
  const unreadMessagesForStaff = messages.filter(m => (m.sender === "parent" || m.sender === "colleague") && m.unread).length;
  const handleLogin = ({
    firstName,
    lastName,
    role: loginRole,
    creche: loginCreche
  }) => {
    setCurrentUser({
      firstName,
      lastName
    });
    setCreche(loginCreche);
    setRole(loginRole);
    setActive(loginRole === "staff" ? "dashboard" : "home");
    setScreen("app");
  };
  const handleLogout = () => {
    onSignOut();
    setCurrentUser(null);
    setCreche(null);
    setUserOpen(false);
    setProfileOpen(false);
    setNotifOpen(false);
  };
  const handleCycleStatus = (sectionId, childName) => {
    setSections(prev => prev.map(section => section.id !== sectionId ? section : {
      ...section,
      children: section.children.map(child => child.name !== childName ? child : {
        ...child,
        status: STATUS_CYCLE[(STATUS_CYCLE.indexOf(child.status) + 1) % STATUS_CYCLE.length]
      })
    }));
  };
  const handleToggleChildAbsence = (sectionId, childName) => {
    setSections(prev => prev.map(section => section.id !== sectionId ? section : {
      ...section,
      children: section.children.map(child => child.name !== childName ? child : {
        ...child,
        status: child.status === "Absent" ? "Présent" : "Absent"
      })
    }));
  };
  const handleCreateEvent = event => {
    setEvents(prev => [event, ...prev]);
    setEventModalOpen(false);
  };
  const handleRemoveEvent = id => {
    setEvents(prev => prev.filter(ev => ev.id !== id));
  };
  const handleMarkAllNotifRead = () => {
    setNotifications(prev => prev.map(n => ({
      ...n,
      unread: false
    })));
  };
  const handleSendMessage = (sender, authorName, threadId) => text => {
    setMessages(prev => [...prev, {
      id: Date.now(),
      threadId,
      sender,
      authorName,
      text,
      time: new Date().toLocaleString("fr-FR", {
        day: "numeric",
        month: "short",
        hour: "2-digit",
        minute: "2-digit"
      }),
      unread: true
    }]);
  };
  const handleMarkMessagesRead = (viewerRole, threadId) => () => {
    setMessages(prev => prev.map(m => m.threadId === threadId && m.sender !== viewerRole ? {
      ...m,
      unread: false
    } : m));
  };
  const handleSelectStaffThread = threadId => {
    setStaffThreadId(threadId);
    setMessages(prev => prev.map(m => m.threadId === threadId && m.sender !== "staff" ? {
      ...m,
      unread: false
    } : m));
  };
  const handleToggleNotif = () => {
    setUserOpen(false);
    setNotifOpen(open => {
      const next = !open;
      if (next) handleMarkAllNotifRead();
      return next;
    });
  };
  const handleToggleUser = () => {
    setNotifOpen(false);
    setUserOpen(open => !open);
  };
  const handleOpenProfile = () => {
    setUserOpen(false);
    setProfileOpen(true);
  };
  const handleSwitchRole = nextRole => {
    return; // changement de rôle désactivé : le rôle est défini côté serveur
    setRole(nextRole);
    setActive(nextRole === "staff" ? "dashboard" : "home");
    setProfileOpen(false);
  };
  const handleToggleRsvp = eventId => {
    setRsvps(prev => ({
      ...prev,
      [eventId]: !prev[eventId]
    }));
  };
  const handleSetHours = (name, day, value) => {
    setTeamCalendar(prev => prev.map(person => person.name !== name ? person : {
      ...person,
      days: {
        ...person.days,
        [day]: value
      }
    }));
  };
  const handleRemovePerson = name => {
    setTeamCalendar(prev => prev.filter(person => person.name !== name));
  };
  const handleAddPerson = (name, role) => {
    const days = {};
    WEEK_DAYS.forEach(day => {
      days[day] = null;
    });
    setTeamCalendar(prev => [...prev, {
      name,
      role,
      days
    }]);
  };
  const searchResults = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    const children = sections.flatMap(s => s.children.filter(c => c.name.toLowerCase().includes(q)).map(c => ({
      kind: "child",
      name: c.name,
      detail: s.name
    })));
    const staff = teamCalendar.filter(p => p.name.toLowerCase().includes(q)).map(p => ({
      kind: "staff",
      name: p.name,
      detail: p.role
    }));
    return [...children, ...staff].slice(0, 8);
  }, [query, sections, teamCalendar]);
  const handlePickResult = result => {
    setQuery("");
    setActive(result.kind === "child" ? "children" : "team");
  };
  useEffect(() => {
    const handleClick = e => {
      if (!e.target.closest("header")) {
        setNotifOpen(false);
        setUserOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);
  const parentSection = sections.find(s => s.id === PARENT_CHILD.sectionId);
  const parentChild = parentSection?.children.find(c => c.name === PARENT_CHILD.name);
  const nextParentEvent = visibleEvents.filter(ev => ev.forParents).sort((a, b) => (a.date + a.time).localeCompare(b.date + b.time))[0];
  const roster = useMemo(() => buildRosterForDay(teamCalendar, getTodayName()), [teamCalendar]);
  if (screen === "login") {
    return /*#__PURE__*/React.createElement(LoginScreen, {
      creches: CRECHES,
      onLogin: handleLogin
    });
  }
  let content;
  if (role === "staff") {
    if (active === "dashboard") {
      content = /*#__PURE__*/React.createElement(DashboardView, {
        sections: sections,
        onCycleStatus: handleCycleStatus,
        events: visibleEvents,
        capacity: capacity,
        onOpenNewEvent: () => setEventModalOpen(true),
        onGoToChildren: () => setActive("children"),
        roster: roster,
        firstName: currentUser?.firstName
      });
    } else if (active === "planning") {
      content = /*#__PURE__*/React.createElement(StaffPlanningView, {
        events: visibleEvents,
        onOpenNewEvent: () => setEventModalOpen(true),
        onRemoveEvent: handleRemoveEvent
      });
    } else if (active === "children") {
      content = /*#__PURE__*/React.createElement(ChildrenView, {
        sections: sections,
        onCycleStatus: handleCycleStatus
      });
    } else if (active === "team") {
      content = /*#__PURE__*/React.createElement(TeamView, {
        roster: roster,
        teamCalendar: teamCalendar,
        onGoToCalendar: () => setActive("calendar")
      });
    } else if (active === "calendar") {
      content = /*#__PURE__*/React.createElement(TeamCalendarView, {
        teamCalendar: teamCalendar,
        onSetHours: handleSetHours,
        onRemovePerson: handleRemovePerson,
        onAddPerson: handleAddPerson
      });
    } else if (active === "messages") {
      const activeContact = familyContacts.find(c => c.id === staffThreadId) || staffContacts.find(c => c.id === staffThreadId);
      const isColleagueThread = staffThreadId.startsWith("staffchat:");
      content = /*#__PURE__*/React.createElement(ConversationView, {
        viewerRole: "staff",
        title: activeContact ? activeContact.name : "Discussion",
        subtitle: activeContact ? isColleagueThread ? activeContact.sub : `${activeContact.sub} · échange avec la famille` : "",
        messages: messages,
        contactGroups: staffContactGroups,
        selectedThreadId: staffThreadId,
        onSelectThread: handleSelectStaffThread,
        unreadByThread: unreadByThread,
        onSend: handleSendMessage("staff", currentUser ? `${currentUser.firstName} ${currentUser.lastName}` : "Direction", staffThreadId),
        onMarkRead: handleMarkMessagesRead("staff", staffThreadId)
      });
    } else {
      content = /*#__PURE__*/React.createElement(SettingsView, {
        role: role,
        capacity: capacity,
        onSaveCapacity: setCapacity,
        crecheName: creche?.name
      });
    }
  } else {
    if (active === "home") {
      content = /*#__PURE__*/React.createElement(ParentHomeView, {
        child: parentChild,
        section: parentSection,
        onToggleAbsence: () => handleToggleChildAbsence(PARENT_CHILD.sectionId, PARENT_CHILD.name),
        dailyReport: INITIAL_DAILY_REPORT,
        upcomingEvent: nextParentEvent,
        onGoToMessages: () => setActive("messages"),
        unreadMessages: unreadMessagesForParent,
        firstName: currentUser?.firstName
      });
    } else if (active === "child") {
      content = /*#__PURE__*/React.createElement(ParentChildView, {
        child: parentChild,
        section: parentSection,
        onToggleAbsence: () => handleToggleChildAbsence(PARENT_CHILD.sectionId, PARENT_CHILD.name),
        dailyReport: INITIAL_DAILY_REPORT
      });
    } else if (active === "planning") {
      content = /*#__PURE__*/React.createElement(ParentPlanningView, {
        events: visibleEvents,
        rsvps: rsvps,
        onToggleRsvp: handleToggleRsvp
      });
    } else if (active === "messages") {
      content = /*#__PURE__*/React.createElement(ConversationView, {
        viewerRole: "parent",
        title: "Discussion",
        subtitle: "Prévenez l'équipe d'un changement de présence ou posez une question",
        messages: messages,
        contactGroups: null,
        selectedThreadId: familyThreadId,
        onSend: handleSendMessage("parent", currentUser ? `${currentUser.firstName} ${currentUser.lastName} (parent)` : "Camille Petit (parent)", familyThreadId),
        onMarkRead: handleMarkMessagesRead("parent", familyThreadId)
      });
    } else {
      content = /*#__PURE__*/React.createElement(SettingsView, {
        role: role,
        capacity: capacity,
        onSaveCapacity: setCapacity,
        crecheName: creche?.name
      });
    }
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "flex min-h-screen bg-slate-50 text-slate-900"
  }, /*#__PURE__*/React.createElement(Sidebar, {
    role: role,
    active: active,
    onSelect: setActive,
    unreadMessages: role === "staff" ? unreadMessagesForStaff : unreadMessagesForParent,
    crecheName: creche ? creche.name : "CrècheConnect"
  }), /*#__PURE__*/React.createElement("div", {
    className: "flex min-w-0 flex-1 flex-col"
  }, /*#__PURE__*/React.createElement(Header, {
    role: role,
    currentUser: currentUser,
    crecheName: creche ? creche.name : "CrècheConnect",
    query: query,
    onQueryChange: setQuery,
    searchResults: searchResults,
    onPickResult: handlePickResult,
    notifications: notifications,
    unreadCount: unreadCount,
    isNotifOpen: isNotifOpen,
    onToggleNotif: handleToggleNotif,
    onMarkAllRead: handleMarkAllNotifRead,
    isUserOpen: isUserOpen,
    onToggleUser: handleToggleUser,
    onOpenProfile: handleOpenProfile,
    onLogout: handleLogout
  }), /*#__PURE__*/React.createElement("main", {
    className: "flex-1 overflow-y-auto"
  }, content)), isEventModalOpen && /*#__PURE__*/React.createElement(NewEventModal, {
    onClose: () => setEventModalOpen(false),
    onCreate: handleCreateEvent
  }), isProfileOpen && /*#__PURE__*/React.createElement(ProfileModal, {
    role: role,
    currentUser: currentUser,
    onClose: () => setProfileOpen(false),
    onSwitchRole: handleSwitchRole
  }));
}
export default CrecheConnectDashboard;
