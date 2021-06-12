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
                .title('Main Navigation')
                .child(
                  S.document()
                    .schemaType('mainNavigation')
                    .documentId('mainNavigation')
                ),
              S.listItem()
                .title('Footer')
                .child(
                  S.document()
                    .schemaType('footer')
                    .documentId('footer')
                ),
              S.listItem()
                .title('Site Settings')
                .child(
                  S.document()
                    .schemaType('siteSettings')
                    .documentId('siteSettings'),
                ),
              S.listItem()
                .title('Social Accounts')
                .child(
                  S.document()
                    .schemaType('socialAccounts')
                    .documentId('socialAccounts')
                ),
            ])
        ),
        ...S.documentTypeListItems().filter(listItem => !['siteSettings', 'mainNavigation', 'socialAccounts', 'footer'].includes(listItem.getId()))
      ])
}