import fs from 'node:fs/promises';
import path from 'node:path';

export async function listItems(listPath = './') {
    const items = await fs.readdir(listPath, {
        withFileTypes: true
    });

    return items.map(item => ({
        name: item.name,
        type: item.isDirectory() ? 'folder' : 'file',
        path: path.join(listPath, item.name),
    }));
}

export async function deleteFolder(folderPath) {
    await fs.rm(folderPath, {
        recursive: true,
        force: true
    });
}

export async function deleteFile(filepath) {
    await fs.unlink(filepath);
}

export async function createFolder(foldername) {
    await fs.mkdir(foldername, {
        recursive: true
    });
}

export async function writeToFile(pathname, content = '') {
    await fs.appendFile(pathname, content);
}

export async function createFile(pathname, content = '') {
    await fs.writeFile(pathname, content);
}