const inquirer = require("inquirer");
const fse = require("fs-extra");
const path = require("path");
const templateRoot = path.join(__dirname, "../template");
const execRoot = path.join(process.cwd());

const generateFiles = async (src, dest, name) => {
  await fse.copy(src, dest);

  const filepaths = await fse.readdir(dest);

  await Promise.all(
    filepaths.map((filepath) => {
      const fullpath = path.join(dest, filepath);

      return fse.rename(
        fullpath,
        path.join(path.dirname(fullpath), `${name}${path.extname(fullpath)}`)
      );
    })
  );
};

async function createPage(name, modulePath = "") {
  // 获取业务文件夹路径
  const pageRoot = path.join(modulePath, name);

  // 查看文件夹是否存在
  const isPageExist = await fse.pathExists(pageRoot);

  if (isPageExist) {
    console.error(`当前页面已存在，请重新确认, path: ` + pageRoot);
    return;
  }

  // 创建文件夹
  await fse.mkdirs(pageRoot);

  // 创建模板文件
  await generateFiles(path.join(templateRoot, "page"), pageRoot, name);

  // 填充app.json

  // 成功提示
  console.info(`createPage success, path: ` + pageRoot);
}

async function createComponent(name, modulePath = "") {
  // 获取业务文件夹路径
  const componentRoot = path.join(modulePath, name);

  // 查看文件夹是否存在
  const isPageExist = await fse.pathExists(componentRoot);

  if (isPageExist) {
    console.error(`当前组件已存在，请重新确认, path: ` + componentRoot);
    return;
  }

  // 创建文件夹
  await fse.mkdirs(componentRoot);

  // 创建模板文件
  await generateFiles(
    path.join(templateRoot, "component"),
    componentRoot,
    name
  );

  // 成功提示
  console.info(`createComponent success, path: ` + componentRoot);
}

const question = [
  // 选择模式使用 page -> 创建页面 | component -> 创建组件
  {
    type: "list",
    name: "mode",
    message: "选择想要创建的模版",
    choices: ["page", "component"],
  },

  {
    type: "path",
    name: "path",
    message: "选择想要创建的路径（默认process.cwd()为根路径）",
  },

  // 设置名称
  {
    type: "input",
    name: "name",
    message: (answer) => `设置 ${answer.mode} 名称 (e.g: index):`,
  },
];

module.exports = () => {
  // 问题执行
  inquirer.prompt(question).then((answer) => {
    switch (answer.mode) {
      case "page": {
        createPage(answer.name, path.join(execRoot, answer.path));
        break;
      }
      case "component": {
        createComponent(answer.name, path.join(execRoot, answer.path));
        break;
      }
    }
  });
};
