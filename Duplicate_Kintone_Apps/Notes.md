# Notes & Resources

[レコードも含めてアプリをコピーできますか？](https://faq.cybozu.info/alphascope/cybozu/web/kintone/Detail.aspx?id=2131&isCrawler=1)
* Can I copy the app including records?
* Yes-ish
*

[「kintone」にアップロードした添付ファイルを一括でダウンロードすることは可能ですか？](https://faq.cybozu.info/alphascope/cybozu/web/kintone/Detail.aspx?id=2201&isCrawler=1)
* Is it possible to bulk download the attached files stored on Kintone?
* Possible via API but not with only standard features.


## Help Docs

[Data Types That Can Be Imported or Exported](https://get.kintone.help/k/en/admin/other/import_export.html)

[Creating and Updating Records Including Tables in Bulk](https://get.kintone.help/k/en/user/using_app/import_records/update_table.html)

[Exporting Data to a File](https://get.kintone.help/k/en/user/app_collectdata/data_export.html)


## Customization

[Command Line Tool basics – Downloading Attachments](https://developer.kintone.io/hc/en-us/articles/115002614853-Command-Line-Tool-basics#file-us-tips-115002614853-15-LC7:~:text=Downloading%20Attachments)

Sample Data included App - Sales App

Notes on specs on exporting Apps
* Lookup fields
  * Only the record number of the called upon record from the other app can be exported as CSV file (not the data being displayed in the target app's record itself)
  * So when this data is imported into a Lookup field
  * To update the Lookup field of the duplicated app based on CSV is to perform a bulk update with the input data
