SELECT  file_statistics.id,
        file_statistics.timestamp,
        false_directory.id,
        false_directory.fake_path,
        true_directory.id,
        true_directory.real_path
FROM
        file_statistics,
        false_directory,
        true_directory
WHERE
        file_statistics.id = false_directory.id
AND
        file_statistics.id = true_directory.id;