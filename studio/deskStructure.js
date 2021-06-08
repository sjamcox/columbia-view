import S from '@sanity/desk-tool/structure-builder'

export default () => {
  return S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Config')
        .child(
          S.list()
            .title('Settings Documents')
            .items([
              S.listItem()
                .title('Site Settings')
                .child(
                  S.document()
                    .schemaType('siteSettings')
                    .documentId('siteSettings'),
                ),
              S.listItem()
                .title('Main Navigation')
                .child(
                  S.document()
                    .schemaType('mainNavigation')
                    .documentId('mainNavigation')
                ),
            ])
        ),
        ...S.documentTypeListItems().filter(listItem => !['siteSettings', 'mainNavigation'].includes(listItem.getId()))
      ])
}