import string from '../extensions/string'

export const createNav = (data) => {
  const { name, nav } = data

  const resources = {}
  const routes = {}
  let navResult = []
  let menuResult = []

  nav.forEach((nav) => {
    let menuChildren = []

    const resourceNav = `${name}`.toLowerCase()

    const navName = string.strToSnakeCase(`${name}`)?.toUpperCase()

    resources[navName] = resourceNav

    if ((nav.children?.length ?? 0) > 0) {
      const childNav = nav.children?.map((child) => {
        const childrenNav = createNav(child)

        const childNavName = string.strToCamelCase(child.name)

        navResult.push(...childrenNav[`${childNavName}Nav`])
        Object.assign(resources, childrenNav[`${childNavName}Resources`])
        Object.assign(routes, childrenNav[`${childNavName}Routes`])
        menuChildren.push(...childrenNav[`${childNavName}Menu`])
        return childrenNav
      })
    }

    if (nav.path) {
      routes[navName] = nav.path

      navResult.push({
        name: name,
        key: `${name}`,
        resource: resourceNav,
        path: nav.path,
        component: nav.component,
        isMenu: !!nav.isMenu,
        isProtected: !!nav.isProtected,
        isAuth: !!nav.isAuth
      })
    }

    if (nav.isMenu) {
      const menu = {
        key: `${name}`,
        icon: nav.icon,
        path: nav.path,
        name: nav?.menuName ?? name,
        resource: resourceNav,
        isProtected: !!nav.isProtected,
        isAuth: !!nav.isAuth
      }
      if (menuChildren.length > 0) {
        menu.children = menuChildren
      }
      menuResult.push(menu)
    }
  })

  const navName = string.strToCamelCase(name)

  return {
    [`${navName}Resources`]: resources,
    [`${navName}Nav`]: navResult,
    [`${navName}Routes`]: routes,
    [`${navName}Menu`]: menuResult
  }
}

export default createNav
