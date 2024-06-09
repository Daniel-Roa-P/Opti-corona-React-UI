SELECT distinct {class.code} , {classAt.code}, {tEnum.code}, {tEnum.name[es]} 
FROM {ClassAttributeAssignment as classAsig 
join ClassificationClass as class on {classAsig.classificationClass} = {class.pk} 
join ClassificationAttribute as classAt on {classAsig.classificationAttribute} = {classAt.pk}
join Catalogversion as cv ON {cv.pk}={class.catalogversion} 
join Catalog as c ON {c.pk}={cv.catalog}
join ClassificationAttributeTypeEnum as tEnum on {classAsig.attributeType} = {tEnum.pk}} 
where {c.id} = 'corona-coClassification' 
and {classAt.systemVersion} = 8796093219417 
and {tEnum.name[es]} = 'Valuelist'

select distinct {ca.code} as codigo, {cav.code} as valor from {AttributeValueAssignment as ava 
join ClassificationAttribute as ca on {ca.pk} = {ava.attribute}
join ClassificationAttributeValue as cav on {cav.pk} = {ava.value} } where {ava.systemVersion} = 8796093219417