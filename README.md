#  Guía de configuración (Setup Guide)

Este documento guía al estudiante paso a paso a configurar el proyecto **Encriptador‑OracleNext‑Alura**, desde la clonación hasta la realización del primer commit.

---

## 1. Clonar el repositorio

```bash
git clone https://github.com/Djacamo01/Encriptador-OracleNext-Alura.git
cd Encriptador-OracleNext-Alura
```

📷 ![Home GitHub](https://github.com/Djacamo01/Encriptador-OracleNext-Alura/blob/main/img/Home-github.png)

---

## 2. Explorar la estructura del proyecto

Una vez dentro del directorio:

```bash
ls -R
```

Deberías ver algo como:

- `index.html` – página principal  
- `style.css` – estilos CSS  
- `script.js` – lógica de encriptado/desencriptado  
- `README.md`, imágenes (`oracle.png`, `alura.png`, etc.)  
- Carpeta `css/` si aplica, entre otros recursos

📷 ![Working Tree](https://github.com/Djacamo01/Encriptador-OracleNext-Alura/blob/main/img/working-tree.png)

---

## 3. Inicializar un repositorio Git (si aún no existe)

Si el proyecto no tiene repositorio:

```bash
git init
```

Luego comprobarás que `.git/` se creó.

📷 ![Git Init](https://github.com/Djacamo01/Encriptador-OracleNext-Alura/blob/main/img/init.png)

---

## 4. Ver el estado actual del repositorio

Consulta qué archivos están versionados o pendientes:

```bash
git status
```

Por ejemplo, puede mostrar:

```
On branch main
nothing to commit, working tree clean
```

o

```
Untracked files:
  (use "git add ..." to include in what will be committed)
    index.html
    script.js
    style.css
    README.md
    oracle.png
    alura.png
```

📷 ![Git Status](https://github.com/Djacamo01/Encriptador-OracleNext-Alura/blob/main/img/gitstatus.png)

---

## 5. Agregar archivos al área de staging

Para añadir todos los archivos:

```bash
git add .
```

O puedes agregar selectivamente:

```bash
git add index.html script.js README.md
```
¡

---

## 6. Hacer el primer commit

Crea un commit con mensaje claro:

```bash
git commit -m "feat: configuración inicial del proyecto Encriptador‑OracleNext‑Alura"
```

📷 ![Git Commit](https://github.com/Djacamo01/Encriptador-OracleNext-Alura/blob/main/img/gitcommit.png)

---

## 7. Ver historial de commits

```bash
git log --oneline --decorate
```

Salida esperada:

```
a1b2c3d (HEAD -> main) feat: configuración inicial del proyecto Encriptador‑OracleNext‑Alura
```

📷 ![Git Log](https://github.com/Djacamo01/Encriptador-OracleNext-Alura/blob/main/img/gitlog.png)

---

## 8. Flujo típico de cambios

1. Modifica o agrega archivos (ej. `script.js`).  
2. Revisa estado:

    ```bash
    git status
    ```

3. Agrega cambios:

    ```bash
    git add script.js
    ```

4. Crea un commit con mensaje descriptivo:

    ```bash
    git commit -m "fix(core): corrige función de desencriptado"
    ```

5. Verifica el historial nuevamente:

    ```bash
    git log --oneline
    ```


---

## 9. Modificar el último commit (opcional)

Si olvidaste algo o quieres mejorar el mensaje:

```bash
git add archivo-faltante.js
git commit --amend -m "feat: agrega función sanitizeInput() al script"
```



---

## 10. Deshacer cambios locales (opcional)

- Para **quitar** un archivo del staging area:

    ```bash
    git reset archivo.txt
    ```

- Para revertir un commit ya hecho (sin reescribir historia pública):

    ```bash
    git revert <commit_hash>
    ```


---

## 11. Espacios para capturas visuales

*(Reemplaza más adelante con imágenes que muestran cada comando en acción)*

| Paso | Descripción | Imagen |
|------|-------------|--------|
| 1 | Clonación del repo | ![git clone](https://github.com/Djacamo01/Encriptador-OracleNext-Alura/blob/main/img/git-clone.png) |
| 2 | Estado inicial (`git status`) | ![git status](https://github.com/Djacamo01/Encriptador-OracleNext-Alura/blob/main/img/git-status.png) |
| 3 | Adición al staging (`git add .`) | ![git add](https://github.com/Djacamo01/Encriptador-OracleNext-Alura/blob/main/img/git-add.png) |
| 4 | Primer commit (`git commit`) | ![git commit](https://github.com/Djacamo01/Encriptador-OracleNext-Alura/blob/main/img/git-commit.png) |
| 5 | Historial de commits (`git log`) | ![git log](https://github.com/Djacamo01/Encriptador-OracleNext-Alura/blob/main/img/git-log.png) |

---

## 12. Resumen rápido

| Comando            | Acción                                                 |
|--------------------|--------------------------------------------------------|
| `git clone ...`    | Clona el repositorio                                   |
| `git init`         | Inicializa Git si hace falta                          |
| `git status`       | Muestra estado actual del proyecto                    |
| `git add`          | Añade cambios al área de staging                      |
| `git commit -m ...`| Guarda cambios con mensaje claro                      |
| `git log`          | Revisa historial de commits                           |
| `git commit --amend`| Modifica último commit                              |
| `git revert`       | Revierte commit sin borrar historial                  |

---

