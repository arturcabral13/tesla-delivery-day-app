const STORAGE_KEY = "tesla-model-y-juniper-delivery-v1";
const MINUTES_PER_ITEM = 2;

const sections = [
  {
    id: "bring",
    nav: "Overview",
    title: "WHAT TO BRING",
    zone: "overview",
    groups: [{ title: "WHAT TO BRING", items: ["Payment (Tesla App)", "Proof of Insurance", "Driver License", "Phone", "Tesla App Logged In", "Trade-In Keys (if applicable)", "Checklist Available"] }]
  },
  {
    id: "documents",
    nav: "Documents",
    title: "PRE-DELIVERY DOCUMENTS",
    zone: "documents",
    groups: [{ title: "PRE-DELIVERY DOCUMENTS", items: ["Verify Full Name", "Verify Address", "Verify VIN", "Verify Price", "Verify Configuration"] }]
  },
  {
    id: "exterior-front",
    nav: "Exterior",
    title: "EXTERIOR FRONT",
    zone: "front",
    groups: [
      { title: "EXTERIOR FRONT", items: ["Paint", "Scratches", "Marks", "Dents", "Abrasions", "Hood Alignment", "Front Bumper", "Panel Gaps", "Headlight Alignment", "Lights", "Headlights", "High Beams", "Hazards", "DRLs", "Condensation Check"] },
      { title: "Frunk", items: ["Tow Hook Present", "Drain Plug Present", "LED Light Works", "Weather Seals", "Hinges"] },
      { title: "Windshield", items: ["Cracks", "Wiper Installation", "Front Camera", "Bumper Camera"] },
      { title: "Roof Glass", items: ["Alignment", "Cracks", "Distortion"] }
    ]
  },
  {
    id: "exterior-sides",
    nav: "Exterior",
    title: "EXTERIOR SIDES",
    zone: "sides",
    groups: [
      { title: "EXTERIOR SIDES", items: ["Paint", "Door Panels", "Panel Gaps", "Charge Port Alignment", "Pillars", "Side Cameras", "Mirrors", "Mirror Trim", "Auto-Dimming Border", "Doors", "Handles Flush", "Door Trim", "Charge Port Opens", "Windows", "Scratches", "Distortion", "Wheels", "Correct Wheels Installed", "Rim Damage", "Valve Stem Caps", "Plastic Fender Inspection"] },
      { title: "ADDITIONAL CHECKS FROM LEGACY LIST", items: ["Inspect Tires For Debris", "Inspect Rocker Panels", "Inspect Wheel Wells", "Inspect Undercarriage", "Inspect Windshield Alignment"] }
    ]
  },
  {
    id: "exterior-rear",
    nav: "Exterior",
    title: "EXTERIOR REAR",
    zone: "rear",
    groups: [{ title: "EXTERIOR REAR", items: ["Rear Paint", "Rear Bumper", "Roof Alignment", "Glass Roof", "Tail Light Alignment", "Tail Light Condensation", "Brake Lights", "Rear Camera", "Badging", "TESLA Badge", "Dual Motor Badge (if applicable)", "Launch Badge (if applicable)"] }]
  },
  {
    id: "interior-doors-seats",
    nav: "Interior",
    title: "INTERIOR DOORS AND SEATS",
    zone: "interior-rear",
    groups: [
      { title: "Front Doors", items: ["Operation", "Door Seals", "Door Jamb Paint", "Window Operation", "Emergency Release", "RGB Lighting"] },
      { title: "Front Seats", items: ["Seat Upholstery", "Seat Belts", "Seat Movement", "Lumbar Support", "Lights", "Floor Mats Present"] },
      { title: "Rear Doors", items: ["Operation", "Door Seals", "Window Operation", "Emergency Release", "RGB Lighting"] },
      { title: "Rear Seats", items: ["Seat Alignment", "Seat Belts", "Recline", "Fold Function", "Rear Screen", "Coat Hooks"] }
    ]
  },
  {
    id: "interior-front",
    nav: "Interior",
    title: "INTERIOR FRONT",
    zone: "interior-front",
    groups: [
      { title: "INTERIOR FRONT", items: ["Mirror Adjustment", "Rearview Mirror", "Sun Visors", "Vanity Lights", "Manual Gear Shifter", "Dashboard Alignment", "Center Console", "Wireless Chargers", "USB-C Ports", "12V Outlet"] },
      { title: "Display", items: ["Errors", "Scratches", "Dead Pixels", "Touch Responsiveness", "Phantom Touches"] },
      { title: "Glovebox", items: ["USB Drive Present", "J1772 Adapter Present"] },
      { title: "Climate", items: ["Heating", "Cooling", "Biodefense Mode", "Oscillating Vent", "Rear Airflow", "Ventilated Seats", "Heated Seats", "Heated Steering Wheel"] },
      { title: "Speakers", items: ["Balance Test", "Subwoofer Test", "Distortion Check", "Exterior Speaker Test"] },
      { title: "Cameras", items: ["Front", "Side", "Rear"] },
      { title: "Steering Wheel", items: ["Buttons", "Voice Command", "Horn", "Wipers", "Washer Fluid", "Turn Signals"] },
      { title: "Headliner", items: ["Stains", "Sagging", "Alignment"] },
      { title: "ADDITIONAL LEGACY CHECKS", items: ["Speaker Corner Testing", "Seat Seam Inspection", "Backup Camera Quality"] }
    ]
  },
  {
    id: "trunk-frunk",
    nav: "Trunk & Frunk",
    title: "TRUNK AND FRUNK",
    zone: "trunk",
    groups: [{ title: "TRUNK AND FRUNK", items: ["Frunk Open Close", "Tow Hook Included", "Weather Seals", "Trunk Open Close", "Trunk Latch", "Partial Close Function", "Seat Fold Buttons", "Trunk Lights", "Trunk Wells", "Parcel Shelf", "12V Outlet", "Front License Plate Mount"] }]
  },
  {
    id: "connectivity",
    nav: "Charging",
    title: "CONNECTIVITY",
    zone: "charging",
    groups: [{ title: "CONNECTIVITY", items: ["Key Card 1", "Key Card 2", "Bluetooth Pairing", "Phone Key Setup"] }]
  },
  {
    id: "charging",
    nav: "Charging",
    title: "CHARGING",
    zone: "charging",
    groups: [{ title: "CHARGING", items: ["Charge Port Alignment", "Charge Port Open Close", "Charge Indicator Light", "J1772 Adapter", "Tesla Charger Test", "Supercharger Test Placeholder"] }]
  },
  {
    id: "final-review",
    nav: "Final Review",
    title: "FINAL REVIEW",
    zone: "final",
    groups: [{ title: "FINAL REVIEW", items: ["Vehicle Marked Delivered", "Documentation Saved", "Service Requests Logged", "Photos Saved", "Delivery Accepted"] }]
  }
];

const zoneLinks = [
  { id: "front", label: "Front", target: "exterior-front", className: "zone-front" },
  { id: "driver", label: "Driver Side", target: "exterior-sides", className: "zone-driver" },
  { id: "passenger", label: "Passenger Side", target: "exterior-sides", className: "zone-passenger" },
  { id: "rear", label: "Rear", target: "exterior-rear", className: "zone-rear" },
  { id: "interior-front", label: "Interior Front", target: "interior-front", className: "zone-interior-front" },
  { id: "interior-rear", label: "Interior Rear", target: "interior-doors-seats", className: "zone-interior-rear" },
  { id: "frunk", label: "Frunk", target: "exterior-front", className: "zone-frunk" },
  { id: "trunk", label: "Trunk", target: "trunk-frunk", className: "zone-trunk" },
  { id: "charging", label: "Charging", target: "charging", className: "zone-charging" }
];

const itemMeta = [];
sections.forEach((section) => {
  section.groups.forEach((group) => {
    group.items.forEach((name, index) => {
      itemMeta.push({
        id: `${section.id}-${slug(group.title)}-${index}`,
        name,
        sectionId: section.id,
        sectionTitle: section.title,
        groupTitle: group.title,
        nav: section.nav,
        zone: section.zone
      });
    });
  });
});

const defaultState = {
  theme: window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light",
  startedAt: Date.now(),
  completedAt: null,
  vin: "",
  deliveryDate: new Date().toISOString().slice(0, 10),
  items: {},
  sectionNotes: {}
};

let state = loadState();
let toastTimer;

function slug(text) {
  return text.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return { ...defaultState, ...saved, items: saved?.items || {}, sectionNotes: saved?.sectionNotes || {} };
  } catch {
    return { ...defaultState };
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function itemState(id) {
  const current = state.items[id] || {};
  return {
    status: current.status || "not",
    notes: current.notes || "",
    photoTaken: current.photoTaken ?? current.photo ?? false,
    updatedAt: current.updatedAt || null
  };
}

function setItemState(id, patch) {
  state.items[id] = { ...itemState(id), ...patch, updatedAt: new Date().toISOString() };
  if (allItemsComplete() && !state.completedAt) state.completedAt = Date.now();
  if (!allItemsComplete()) state.completedAt = null;
  saveState();
  renderStats();
}

function statusLabel(status) {
  return {
    not: "Not Checked",
    pass: "Pass",
    attention: "Needs Attention",
    failed: "Failed"
  }[status];
}

function nextStatus(current) {
  return current === "not" ? "pass" : current === "pass" ? "attention" : current === "attention" ? "failed" : "not";
}

function completedItems() {
  return itemMeta.filter((item) => itemState(item.id).status !== "not");
}

function failedItems() {
  return itemMeta.filter((item) => itemState(item.id).status === "failed");
}

function notedItems() {
  return itemMeta.filter((item) => itemState(item.id).notes.trim());
}

function allItemsComplete() {
  return completedItems().length === itemMeta.length;
}

function sectionItems(sectionId) {
  return itemMeta.filter((item) => item.sectionId === sectionId);
}

function navItems(nav) {
  return itemMeta.filter((item) => item.nav === nav);
}

function render() {
  document.documentElement.dataset.theme = state.theme;
  document.getElementById("vinInput").value = state.vin;
  document.getElementById("deliveryDateInput").value = state.deliveryDate;
  renderVehicle();
  renderNav();
  renderChecklist();
  renderStats();
}

function renderVehicle() {
  const wrap = document.getElementById("vehicleZones");
  wrap.innerHTML = `
    <div class="vehicle-map">
      <div class="car-body"></div>
      <div class="car-cabin"></div>
      ${zoneLinks.map((zone) => `<button class="zone ${zone.className}" data-zone="${zone.id}" data-target="${zone.target}" type="button">${zone.label}</button>`).join("")}
    </div>
  `;
  wrap.querySelectorAll(".zone").forEach((button) => {
    button.addEventListener("click", () => openSection(button.dataset.target));
  });
}

function renderNav() {
  const navNames = ["Overview", "Documents", "Exterior", "Interior", "Trunk & Frunk", "Charging", "Final Review"];
  const nav = document.getElementById("sectionNav");
  nav.innerHTML = navNames.map((name) => {
    const target = name === "Overview" ? "overview" : sections.find((section) => section.nav === name)?.id;
    return `<a class="nav-link" href="#${target}" data-nav="${name}">${name} <small>0%</small></a>`;
  }).join("");
}

function renderChecklist() {
  const checklist = document.getElementById("checklist");
  checklist.innerHTML = sections.map((section, sectionIndex) => `
    <details class="accordion" id="${section.id}" ${sectionIndex < 2 ? "open" : ""}>
      <summary>
        <span class="summary-title">
          <strong>${section.title}</strong>
          <span>${section.nav}</span>
        </span>
        <span class="section-count" data-section-count="${section.id}">0 of 0 complete</span>
      </summary>
      <div class="section-body">
        <label class="section-notes">
          ${titleCase(section.title)} Notes
          <textarea data-section-note="${section.id}" placeholder="Add section notes"></textarea>
          <span class="note-time" data-section-note-time="${section.id}"></span>
        </label>
        ${section.groups.map((group) => `
          <div class="subsection">
            <h3>${group.title}</h3>
            ${group.items.map((name, index) => {
              const id = `${section.id}-${slug(group.title)}-${index}`;
              return itemMarkup(id, name);
            }).join("")}
          </div>
        `).join("")}
      </div>
    </details>
  `).join("");

  checklist.querySelectorAll("[data-item]").forEach(attachItemHandlers);
  checklist.querySelectorAll("[data-section-note]").forEach((field) => {
    const note = state.sectionNotes[field.dataset.sectionNote] || { text: "", updatedAt: null };
    field.value = note.text;
    field.addEventListener("input", () => {
      state.sectionNotes[field.dataset.sectionNote] = { text: field.value, updatedAt: new Date().toISOString() };
      saveState();
      renderStats();
    });
  });
}

function itemMarkup(id, name) {
  return `
    <article class="check-item" data-item="${id}">
      <div class="item-top">
        <input class="check-toggle" data-check="${id}" type="checkbox" aria-label="Mark ${name} as passed" />
        <span class="item-name">${name}</span>
        <span class="status-chip" data-status-chip="${id}">Not Checked</span>
      </div>
      <div class="item-actions">
        <button class="status-button" data-status="${id}" type="button">Status</button>
        <button class="issue-button" data-issue="${id}" type="button">Issue</button>
        <label class="photo-taken-control">
          <input data-photo-taken="${id}" type="checkbox" />
          <span>Photo taken</span>
        </label>
      </div>
      <textarea class="item-notes" data-notes="${id}" placeholder="Notes"></textarea>
      <span class="note-time" data-note-time="${id}"></span>
    </article>
  `;
}

function attachItemHandlers(node) {
  const id = node.dataset.item;
  const checkbox = node.querySelector(`[data-check="${id}"]`);
  const statusButton = node.querySelector(`[data-status="${id}"]`);
  const issueButton = node.querySelector(`[data-issue="${id}"]`);
  const photoTaken = node.querySelector(`[data-photo-taken="${id}"]`);
  const notes = node.querySelector(`[data-notes="${id}"]`);

  checkbox.addEventListener("change", () => setItemState(id, { status: checkbox.checked ? "pass" : "not" }));
  statusButton.addEventListener("click", () => setItemState(id, { status: nextStatus(itemState(id).status) }));
  issueButton.addEventListener("click", () => setItemState(id, { status: itemState(id).status === "failed" ? "attention" : "failed" }));
  photoTaken.addEventListener("change", () => {
    setItemState(id, { photoTaken: photoTaken.checked });
    showToast(photoTaken.checked ? "Photo marked as taken" : "Photo mark removed");
  });
  notes.addEventListener("input", () => setItemState(id, { notes: notes.value }));
}

function renderStats() {
  const done = completedItems().length;
  const total = itemMeta.length;
  const failed = failedItems();
  const sectionNotes = Object.values(state.sectionNotes).filter((note) => note.text.trim()).length;
  const noteCount = notedItems().length + sectionNotes;
  const percent = total ? Math.round((done / total) * 100) : 0;
  const remaining = Math.max(0, total - done) * MINUTES_PER_ITEM;

  document.getElementById("overallCount").textContent = `${done} / ${total} Items`;
  document.getElementById("overallPercent").textContent = `${percent}%`;
  document.getElementById("overallBar").style.width = `${percent}%`;
  document.getElementById("timeRemaining").textContent = `${remaining} min`;
  document.getElementById("criticalCount").textContent = failed.length;
  document.getElementById("notesCount").textContent = noteCount;

  itemMeta.forEach((item) => renderItem(item.id));
  sections.forEach((section) => renderSectionProgress(section));
  renderNavProgress();
  renderZoneStates();
  renderCriticalList();
  renderCompletion();
}

function renderItem(id) {
  const current = itemState(id);
  const checkbox = document.querySelector(`[data-check="${id}"]`);
  const chip = document.querySelector(`[data-status-chip="${id}"]`);
  const issue = document.querySelector(`[data-issue="${id}"]`);
  const photoTaken = document.querySelector(`[data-photo-taken="${id}"]`);
  const notes = document.querySelector(`[data-notes="${id}"]`);
  const noteTime = document.querySelector(`[data-note-time="${id}"]`);
  if (!checkbox) return;
  checkbox.checked = current.status === "pass";
  chip.textContent = statusLabel(current.status);
  chip.className = `status-chip status-${current.status}`;
  issue.classList.toggle("active", current.status === "failed");
  photoTaken.checked = current.photoTaken;
  if (document.activeElement !== notes) notes.value = current.notes || "";
  noteTime.textContent = current.updatedAt ? `Updated ${formatTime(current.updatedAt)}` : "";
}

function renderSectionProgress(section) {
  const items = sectionItems(section.id);
  const done = items.filter((item) => itemState(item.id).status !== "not").length;
  const count = document.querySelector(`[data-section-count="${section.id}"]`);
  const noteTime = document.querySelector(`[data-section-note-time="${section.id}"]`);
  const noteField = document.querySelector(`[data-section-note="${section.id}"]`);
  const sectionNote = state.sectionNotes[section.id] || { text: "", updatedAt: null };
  if (count) count.textContent = `${done} of ${items.length} complete`;
  if (noteTime) noteTime.textContent = sectionNote.updatedAt ? `Updated ${formatTime(sectionNote.updatedAt)}` : "";
  if (noteField && document.activeElement !== noteField) noteField.value = sectionNote.text || "";
}

function renderNavProgress() {
  document.querySelectorAll("[data-nav]").forEach((link) => {
    const name = link.dataset.nav;
    const items = name === "Overview" ? itemMeta : navItems(name);
    const done = items.filter((item) => itemState(item.id).status !== "not").length;
    const percent = items.length ? Math.round((done / items.length) * 100) : 0;
    link.querySelector("small").textContent = `${percent}%`;
  });
}

function renderZoneStates() {
  document.querySelectorAll("[data-zone]").forEach((button) => {
    const zone = button.dataset.zone;
    const relevant = zone === "driver" || zone === "passenger"
      ? sections.find((section) => section.id === "exterior-sides")
      : sections.find((section) => section.zone === zone || section.id === button.dataset.target);
    const items = relevant ? sectionItems(relevant.id) : [];
    const stateName = getAggregateState(items);
    button.dataset.state = stateName;
  });
}

function getAggregateState(items) {
  if (!items.length) return "not-started";
  if (items.some((item) => itemState(item.id).status === "failed")) return "issue";
  const done = items.filter((item) => itemState(item.id).status !== "not").length;
  if (done === 0) return "not-started";
  if (done === items.length) return "complete";
  return "in-progress";
}

function renderCriticalList() {
  const list = document.getElementById("criticalList");
  const failed = failedItems();
  if (!failed.length) {
    list.innerHTML = `<div class="empty-state">No failed items yet. Any failed checklist item will appear here automatically.</div>`;
    return;
  }
  list.innerHTML = failed.map((item) => {
    const current = itemState(item.id);
    return `
      <article class="critical-item">
        <strong>${item.name}</strong>
        <div class="critical-meta">
          <span>Location: ${item.sectionTitle} / ${item.groupTitle}</span>
          <span>Priority: Critical</span>
          <span>Photo taken: ${current.photoTaken ? "Yes" : "No"}</span>
        </div>
        <p>${current.notes.trim() || "No notes added."}</p>
      </article>
    `;
  }).join("");
}

function renderCompletion() {
  const card = document.getElementById("completionCard");
  const done = completedItems().length;
  const issues = failedItems().length;
  const complete = done === itemMeta.length;
  card.hidden = !complete;
  if (!complete) return;
  document.getElementById("completionSummary").textContent = `Total Items Checked: ${done} · Issues Found: ${issues}`;
  document.getElementById("completionTime").textContent = `Completion Time: ${elapsedMinutes()} min`;
  drawConfetti();
}

function openSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section?.tagName === "DETAILS") section.open = true;
  section?.scrollIntoView({ block: "start", behavior: "smooth" });
}

function formatTime(dateString) {
  return new Date(dateString).toLocaleString([], { month: "short", day: "numeric", hour: "numeric", minute: "2-digit" });
}

function titleCase(text) {
  return text.toLowerCase().replace(/\b[a-z]/g, (letter) => letter.toUpperCase());
}

function elapsedMinutes() {
  const end = state.completedAt || Date.now();
  return Math.max(1, Math.round((end - state.startedAt) / 60000));
}

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 1800);
}

function generateReport(issuesOnly = false) {
  const done = completedItems();
  const failed = failedItems();
  const passed = itemMeta.filter((item) => itemState(item.id).status === "pass");
  const attention = itemMeta.filter((item) => itemState(item.id).status === "attention");
  const notes = [
    ...Object.entries(state.sectionNotes).filter(([, note]) => note.text.trim()).map(([sectionId, note]) => ({
      location: sections.find((section) => section.id === sectionId)?.title || sectionId,
      text: note.text
    })),
    ...notedItems().map((item) => ({ location: `${item.sectionTitle} / ${item.name}`, text: itemState(item.id).notes }))
  ];

  const rows = (items) => items.map((item) => {
    const current = itemState(item.id);
    return `<tr><td>${item.name}</td><td>${item.sectionTitle}</td><td>${statusLabel(current.status)}</td><td>${current.photoTaken ? "Yes" : "No"}</td><td>${current.notes || ""}</td></tr>`;
  }).join("");

  document.getElementById("reportContent").innerHTML = `
    <h1>${issuesOnly ? "Critical Issues Summary" : "Delivery Report"}</h1>
    <p><strong>Vehicle:</strong> Tesla Model Y Juniper</p>
    <p><strong>VIN:</strong> ${state.vin || "Not entered"}</p>
    <p><strong>Delivery Date:</strong> ${state.deliveryDate || "Not entered"}</p>
    <p><strong>Progress:</strong> ${done.length} / ${itemMeta.length} items complete</p>
    <p><strong>Passed Items:</strong> ${passed.length}</p>
    <p><strong>Needs Attention:</strong> ${attention.length}</p>
    <p><strong>Failed Items:</strong> ${failed.length}</p>
    <p><strong>Completion Time:</strong> ${elapsedMinutes()} min</p>
    <h2>${issuesOnly ? "Critical Issues" : "Failed Items"}</h2>
    ${failed.length ? `<table><thead><tr><th>Issue Name</th><th>Location</th><th>Status</th><th>Photo Taken</th><th>Notes</th></tr></thead><tbody>${rows(failed)}</tbody></table>` : "<p>No failed items recorded.</p>"}
    ${issuesOnly ? "" : `
      <h2>Passed Items</h2>
      ${passed.length ? `<table><thead><tr><th>Item</th><th>Location</th><th>Status</th><th>Photo Taken</th><th>Notes</th></tr></thead><tbody>${rows(passed)}</tbody></table>` : "<p>No passed items recorded.</p>"}
      <h2>Photo Tracking</h2>
      <p>${itemMeta.filter((item) => itemState(item.id).photoTaken).length} items marked with photo taken.</p>
      <h2>Notes</h2>
      ${notes.length ? notes.map((note) => `<h3>${note.location}</h3><p>${note.text}</p>`).join("") : "<p>No notes added.</p>"}
    `}
  `;

  document.getElementById("reportDialog").showModal();
}

function drawConfetti() {
  const canvas = document.getElementById("confettiCanvas");
  const rect = canvas.getBoundingClientRect();
  const scale = window.devicePixelRatio || 1;
  canvas.width = Math.max(1, Math.floor(rect.width * scale));
  canvas.height = Math.max(1, Math.floor(rect.height * scale));
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const colors = ["#2563eb", "#16a34a", "#dc2626", "#f59e0b"];
  for (let i = 0; i < 60; i += 1) {
    ctx.fillStyle = colors[i % colors.length];
    ctx.globalAlpha = 0.85;
    ctx.fillRect(Math.random() * canvas.width, Math.random() * canvas.height, 7 * scale, 3 * scale);
  }
}

document.getElementById("themeToggle").addEventListener("click", () => {
  state.theme = state.theme === "dark" ? "light" : "dark";
  saveState();
  render();
});

document.getElementById("vinInput").addEventListener("input", (event) => {
  state.vin = event.target.value;
  saveState();
});

document.getElementById("deliveryDateInput").addEventListener("change", (event) => {
  state.deliveryDate = event.target.value;
  saveState();
});

document.getElementById("expandAll").addEventListener("click", () => {
  document.querySelectorAll("details").forEach((details) => details.open = true);
});

document.getElementById("collapseAll").addEventListener("click", () => {
  document.querySelectorAll("details").forEach((details) => details.open = false);
});

document.getElementById("resetProgress").addEventListener("click", () => {
  if (!confirm("Reset all inspection progress on this device?")) return;
  state = { ...defaultState, theme: state.theme, deliveryDate: new Date().toISOString().slice(0, 10), startedAt: Date.now(), items: {}, sectionNotes: {} };
  saveState();
  render();
  showToast("Progress reset");
});

document.getElementById("exportIssues").addEventListener("click", () => generateReport(true));
document.getElementById("generateReportComplete").addEventListener("click", () => generateReport(false));
document.getElementById("printReport").addEventListener("click", () => window.print());
document.getElementById("closeReport").addEventListener("click", () => document.getElementById("reportDialog").close());

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => navigator.serviceWorker.register("./sw.js").catch(() => {}));
}

render();
