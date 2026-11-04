// ============================================================
// Camada de API do painel admin.
// Hoje: dados falsos em memória (mock). Para conectar o back, troque
// o corpo de cada função pelo fetch indicado no TODO.
// ============================================================

// Helper pronto para as chamadas reais: já manda o token e trata sessão vencida.
export async function authFetch(path, options = {}) {
  const token = sessionStorage.getItem("admin_token");
  const res = await fetch(path, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
      Authorization: `Bearer ${token}`,
    },
  });
  if (res.status === 401) {
    sessionStorage.removeItem("admin_token");
    window.location.reload(); // token vencido: volta para o login
    throw new Error("Sessão expirada");
  }
  if (!res.ok) throw new Error(`Erro ${res.status}`);
  return res.status === 204 ? null : res.json();
}

const MAX_IMAGE_BYTES = 4 * 1024 * 1024;

// ---------- COMENTÁRIOS ----------
export async function getComments() {
  const data = await authFetch("/api/admin/comments");
  return data.map((c) => ({
    id: c.id,
    name: c.name,
    email: c.email,
    text: c.message,       // back: message
    createdAt: c.created_at,
    pinned: c.fixed,       // back: fixed
  }));
}

export async function setCommentPinned(id, pinned) {
  await authFetch(`/api/admin/comments/${id}`, {
    method: "PATCH",
    body: JSON.stringify({ fixed: pinned }),
  });
}

// ---------- WIKI ----------
const wikiFromBack = (p) => ({
  id: p.id,
  slug: p.slug,
  title: p.title,
  subtitle: p.subtitle ?? "",
  category: p.category,
  text: p.content,
  imageUrl: p.image_url,
  pinned: p.fixed,
});

const wikiToBack = (d) => ({
  title: d.title,
  subtitle: d.subtitle || null,
  category: d.category,
  content: d.text,
  image_url: d.imageUrl,
});

export async function getWikiCategories() {
  const res = await fetch("/api/wiki/categories"); // rota pública
  if (!res.ok) throw new Error("Erro ao carregar categorias");
  return res.json(); // [{ key, label }]
}

export async function getWikiPages() {
  const data = await authFetch("/api/admin/wiki");
  return data.map(wikiFromBack);
}

export async function createWikiPage(data) {
  const page = await authFetch("/api/admin/wiki", {
    method: "POST",
    body: JSON.stringify(wikiToBack(data)),
  });
  return wikiFromBack(page);
}

export async function updateWikiPage(id, data) {
  const page = await authFetch(`/api/admin/wiki/${id}`, {
    method: "PUT",
    body: JSON.stringify(wikiToBack(data)),
  });
  return wikiFromBack(page);
}

export async function deleteWikiPage(id) {
  await authFetch(`/api/admin/wiki/${id}`, { method: "DELETE" });
}


export async function setWikiPagePinned(id, pinned) {
  await authFetch(`/api/admin/wiki/${id}`, {
    method: "PATCH",
    body: JSON.stringify({ fixed: pinned }),
  });
}

export async function uploadImage(file) {
  if (file.size > MAX_IMAGE_BYTES) throw new Error("A imagem passa de 4 MB.");
  const data = await authFetch(`/api/admin/upload?filename=${encodeURIComponent(file.name)}`, {
    method: "POST",
    headers: { "Content-Type": file.type },
    body: file,
  });
  return data.url;
}

export async function deleteComment(id) {
  await authFetch(`/api/admin/comments/${id}`, { method: "DELETE" });
}